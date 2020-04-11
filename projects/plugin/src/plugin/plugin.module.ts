import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';
import { MovieButtonComponent } from './movie-button/movie-button.component';

import { PluginBaseModule } from '@wako-app/mobile-sdk';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { EpisodeButtonComponent } from './episode-button/episode-button.component';
import { MediaModalComponent } from './media-modal/media-modal.component';
import { FormsModule } from '@angular/forms';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';
import { ToastService } from './services/toast.service';
import { EpisodeItemOptionComponent } from './episode-item-option/episode-item-option.component';
import { ShowButtonComponent } from './show-button/show-button.component';

const components = [
  MovieButtonComponent,
  EpisodeButtonComponent,
  EpisodeItemOptionComponent,
  ShowButtonComponent,
  SettingsComponent,
  MediaModalComponent,
  PluginDetailComponent
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [PluginService, ToastService] // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static pluginService = PluginService;
  static settingsComponent = SettingsComponent;
  static movieComponent = MovieButtonComponent;
  static episodeComponent = EpisodeButtonComponent;
  static episodeItemOptionComponent = EpisodeItemOptionComponent;
  static showComponent = ShowButtonComponent;
  static pluginDetailComponent = PluginDetailComponent;
}
