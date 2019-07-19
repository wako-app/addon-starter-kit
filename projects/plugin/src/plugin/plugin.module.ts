import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PluginService } from './services/plugin.service';
import { MovieButtonComponent } from './movie-button/movie-button.component';

import { BrowserService, PluginBaseModule, ToastService } from '@wako-app/mobile-sdk';
import { SettingsComponent } from './settings/settings.component';
import { TranslateModule } from '@ngx-translate/core';
import { EpisodeButtonComponent } from './episode-button/episode-button.component';
import { MediaModalComponent } from './media-modal/media-modal.component';
import { FormsModule } from '@angular/forms';
import { PluginDetailComponent } from './plugin-detail/plugin-detail.component';

const components = [MovieButtonComponent, EpisodeButtonComponent, SettingsComponent, MediaModalComponent, PluginDetailComponent];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [PluginService, BrowserService, ToastService] // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static pluginService = PluginService;
  static settingsComponent = SettingsComponent;
  static movieComponent = MovieButtonComponent;
  static episodeComponent = EpisodeButtonComponent;
  static pluginDetailComponent = PluginDetailComponent;
}
