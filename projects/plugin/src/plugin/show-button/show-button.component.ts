import { Component } from '@angular/core';
import { KodiAppService, KodiPlayerOpenForm, Show, ShowDetailBaseComponent } from '@wako-app/mobile-sdk';
import { ToastService } from '../services/toast.service';
import { catchError } from 'rxjs/operators';
import { NEVER } from 'rxjs';
import { logData } from '../services/tools';

@Component({
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.scss']
})
export class ShowButtonComponent extends ShowDetailBaseComponent {
  show: Show;

  constructor(private toastService: ToastService) {
    super();
  }

  setShow(show: Show): any {
    this.show = show;
  }

  clickShow() {
    KodiAppService.checkAndConnectToCurrentHost()
      .pipe(
        catchError((err) => {
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
        const params = new URLSearchParams(this.show.trailer.split('?')[1]);
        const url = `plugin://plugin.video.youtube/?action=play_video&videoid=${params.get('v')}`;

        logData('Opening URL', url);

        KodiPlayerOpenForm.submit(url).subscribe();
      });
  }
}
