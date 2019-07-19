import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show } from '@wako-app/mobile-sdk';
import { ModalController } from '@ionic/angular';
import { MediaModalComponent } from '../media-modal/media-modal.component';

@Component({
  templateUrl: './episode-button.component.html',
  styleUrls: ['./episode-button.component.scss']
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  constructor(private modalCtrl: ModalController) {
    super();
  }

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }

  openEpisode() {
    this.modalCtrl
      .create({
        component: MediaModalComponent,
        componentProps: {
          show: this.show,
          episode: this.episode
        }
      })
      .then(modal => {
        modal.present();
      });
  }
}
