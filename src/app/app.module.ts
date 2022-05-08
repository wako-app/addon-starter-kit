import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { PluginModule } from '../../projects/plugin/src/plugin/plugin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginLoaderFakeService } from './services/plugin-loader-fake.service';
import { PluginLoaderService } from './services/plugin-loader.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      swipeBackEnabled: true,
      backButtonText: '',
      mode: 'md',
    }),
    AppRoutingModule,
    TranslateModule.forRoot(),
    PluginModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: PluginLoaderService,
      useClass: PluginLoaderFakeService,
    },
    ,
    ...WakoProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
