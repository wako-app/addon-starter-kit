import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { logData } from '../services/tools';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    logData('Current lang', this.translate.currentLang);
    logData('Test instant translate', this.translate.instant('settings.title'));
  }
}
