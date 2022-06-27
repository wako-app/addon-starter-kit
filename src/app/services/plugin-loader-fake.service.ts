import { Injectable, Injector } from '@angular/core';
import {
  PluginBaseService,
  PluginDetail,
  PluginManifest,
  WakoBaseHttpService,
  WakoPluginLoaderService,
} from '@wako-app/mobile-sdk';
import { forkJoin, from, of, throwError } from 'rxjs';
import { catchError, mapTo, switchMap, tap } from 'rxjs/operators';
import { PluginModule } from '../../../projects/plugin/src/plugin/plugin.module';

@Injectable({
  providedIn: 'root',
})
export class PluginLoaderFakeService extends WakoPluginLoaderService {
  constructor(injector: Injector) {
    super(injector);
  }

  override install(manifestUrl: string, lang: string, loadIt = true) {
    manifestUrl = manifestUrl.replace('/plugins/', '/');
    let pluginId = null;
    return WakoBaseHttpService.get<PluginManifest>(manifestUrl).pipe(
      switchMap((manifest) => {
        manifest.url = manifestUrl;

        pluginId = manifest.id;

        const paths = manifestUrl.split('/');
        paths.pop();
        const baseUrl = paths.join('/');

        const pluginDetail = new PluginDetail();

        pluginDetail.manifestUrl = manifestUrl;
        pluginDetail.manifest = manifest;

        pluginDetail.source = null;

        if (manifest.languages) {
          pluginDetail.languages = {};
          const obss = [];
          Object.keys(manifest.languages).forEach((langKey) => {
            const langUrl = manifest.languages[langKey].match('http')
              ? manifest.languages[langKey]
              : baseUrl + manifest.languages[langKey];

            const obs = WakoBaseHttpService.get(langUrl).pipe(
              catchError((err) => {
                console.error('Incorrect JSON: ' + langUrl, err);
                return throwError(err);
              }),
              tap((data) => {
                pluginDetail.languages[langKey] = data;
              })
            );

            obss.push(obs);
          });

          return forkJoin(obss).pipe(mapTo(pluginDetail));
        }

        return of(pluginDetail);
      }),
      switchMap((pluginDetail) => {
        return from(this.savePluginDetail(pluginDetail.manifest.id, pluginDetail));
      }),
      switchMap(() => {
        return from(this.addToList(pluginId));
      }),
      switchMap(() => {
        return this.load(pluginId, lang, true);
      }),
      tap(() => {
        this.loaded$.next(true);
        this.newPlugin$.next(true);
      })
    );
  }

  protected override load<T>(pluginId: string, lang: string, isFirstLoad: boolean) {
    return from(this.getPluginDetail(pluginId)).pipe(
      tap((pluginDetail) => {
        const moduleType = PluginModule;

        const pluginService = this.injector.get(moduleType.pluginService) as PluginBaseService;

        this.pluginModuleMap.set(pluginDetail.manifest.id, {
          pluginDetail,
          moduleType: moduleType,
        });

        pluginService.initialize();

        if (isFirstLoad) {
          pluginService.afterInstall();
        }

        this.setLang(pluginId, lang);
      })
    );
  }

  override getPluginService(pluginId: string): any {
    const plugin = this.pluginModuleMap.get(pluginId);
    if (plugin) {
      return this.injector.get(plugin.moduleType.pluginService) as PluginBaseService;
    }
    return null;
  }
}
