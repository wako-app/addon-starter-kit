import { Component } from '@angular/core';
import { Movie, MovieDetailBaseComponent } from '@wako-app/mobile-sdk';
import { ModalController } from '@ionic/angular';
import { MediaModalComponent } from '../media-modal/media-modal.component';

@Component({
  templateUrl: './movie-button.component.html',
  styleUrls: ['./movie-button.component.scss']
})
export class MovieButtonComponent extends MovieDetailBaseComponent {
  movie: Movie;

  constructor(private modalCtrl: ModalController) {
    super();
  }

  setMovie(movie: Movie): any {
    this.movie = movie;
  }

  openMovie() {
    this.modalCtrl.create({
      component: MediaModalComponent,
      componentProps: {
        movie: this.movie
      }
    }).then(modal => {
      modal.present();
    });
  }
}
