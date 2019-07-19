import { Injectable } from '@angular/core';
import { PluginBaseService } from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';
import { logData } from './tools';

@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService) {
    super();
  }

  initialize() {
    logData('plugin initialized');
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }
}
