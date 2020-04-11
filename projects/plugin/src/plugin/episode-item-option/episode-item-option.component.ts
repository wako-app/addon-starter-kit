import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show } from '@wako-app/mobile-sdk';
import { ToastService } from '../services/toast.service';

@Component({
  templateUrl: './episode-item-option.component.html',
  styleUrls: ['./episode-item-option.component.scss']
})
export class EpisodeItemOptionComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  constructor(private toastService: ToastService) {
    super();
  }

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }

  openEpisode() {
    this.toastService.simpleMessage('Click on episode: ' + this.episode.title);
  }
}
