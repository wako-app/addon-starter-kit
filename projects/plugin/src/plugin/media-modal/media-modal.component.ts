import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { BrowserService, Episode, KodiAppService, Movie, Show, WakoStorage } from '@wako-app/mobile-sdk';
import { catchError, finalize, NEVER } from 'rxjs';
import { ToastService } from '../services/toast.service';
import { logData } from '../services/tools';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss'],
})
export class MediaModalComponent implements OnInit {
  movie: Movie;

  show: Show;
  episode: Episode;

  formHost = new FormGroup({
    host: new FormControl('192.168.1.10'),
    port: new FormControl('8080'),
    login: new FormControl('kodi'),
    password: new FormControl('kodi'),
  });

  constructor(
    private modalCtrl: ModalController,
    private toastService: ToastService,
    private storage: WakoStorage,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.toastService.simpleMessage('openMedia', {
      imdbId: this.movie ? this.movie.ids.imdb : this.show.ids.imdb,
    });

    const kodiSettings = await this.storage.get('kodiSettings');
    if (kodiSettings) {
      this.formHost.setValue({
        host: kodiSettings.host,
        port: kodiSettings.port,
        login: kodiSettings.login,
        password: kodiSettings.password,
      });
      this.setCurrentHost();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  openImdb(imdbId: string) {
    BrowserService.open(`http://www.imdb.com/title/${imdbId}/`);
  }

  saveHost() {
    this.storage.set('kodiSettings', {
      host: this.formHost.value.host,
      port: this.formHost.value.port,
      login: this.formHost.value.login,
      password: this.formHost.value.password,
    });
    this.setCurrentHost();
  }

  private setCurrentHost() {
    KodiAppService.setCurrentHost({
      name: 'WakoAddonStarterKit',
      host: this.formHost.value.host,
      port: this.formHost.value.port,
      login: this.formHost.value.login,
      password: this.formHost.value.password,
      uuid: 'WakoAddonStarterKit',
    });
  }

  async openUrlOnKodi(url: any) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      backdropDismiss: true,
    });
    await loading.present();

    KodiAppService.checkAndConnectToCurrentHost()
      .pipe(
        catchError((err, caught) => {
          loading.dismiss();
          logData('Error on kodi', err);
          if (err === 'hostUnreachable') {
            this.toastService.simpleMessage('My Addon: Your kodi host is unreachable');
          } else {
            this.toastService.simpleMessage('My Addon: You must add a kodi host');
          }
          return NEVER;
        })
      )
      .subscribe(() => {
        KodiAppService.openUrl(url)
          .pipe(finalize(() => loading.dismiss()))
          .subscribe({
            next: () => {
              this.toastService.simpleMessage('URL opened');
            },
            error: () => {
              this.toastService.simpleMessage('Failed to open URL, check Kodi connection first');
            },
          });
      });
  }
}
