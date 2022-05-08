import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule, WakoProviders } from '@wako-app/mobile-sdk';
import { EpisodeButtonComponent } from './episode-button/episode-button.component';
import { EpisodeItemOptionComponent } from './episode-item-option/episode-item-option.component';
import { MediaModalComponent } from './media-modal/media-modal.component';
import { MovieButtonComponent } from './movie-button/movie-button.component';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';
import { PluginService } from './services/plugin.service';
import { ToastService } from './services/toast.service';
import { SettingsComponent } from './settings/settings.component';
import { ShowButtonComponent } from './show-button/show-button.component';

const components = [
  MovieButtonComponent,
  EpisodeButtonComponent,
  EpisodeItemOptionComponent,
  ShowButtonComponent,
  SettingsComponent,
  MediaModalComponent,
  PluginDetailComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'wako',
    }),
  ],
  declarations: [...components],
  providers: [PluginService, ToastService, ...WakoProviders], // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
  static override settingsComponent = SettingsComponent;
  static override movieComponent = MovieButtonComponent;
  static override episodeComponent = EpisodeButtonComponent;
  static override episodeItemOptionComponent = EpisodeItemOptionComponent;
  static override showComponent = ShowButtonComponent;
  static override pluginDetailComponent = PluginDetailComponent;
}
