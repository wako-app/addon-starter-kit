import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { KodiAppService, Show, ShowDetailBaseComponent } from '@wako-app/mobile-sdk';
import { finalize, NEVER } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '../services/toast.service';
import { logData } from '../services/tools';
@Component({
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.scss'],
})
export class ShowButtonComponent extends ShowDetailBaseComponent {
  show: Show;

  constructor(private toastService: ToastService, private loadingController: LoadingController) {
    super();
  }

  setShow(show: Show): any {
    this.show = show;
  }

  async clickShow() {
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
        if (!this.show.trailer) {
          loading.dismiss();
          this.toastService.simpleMessage('My Addon: No trailer available');
          return;
        }
        const params = new URLSearchParams(this.show.trailer.split('?')[1]);
        const url = `plugin://plugin.video.youtube/?action=play_video&videoid=${params.get('v')}`;

        logData('Opening URL', url);

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
