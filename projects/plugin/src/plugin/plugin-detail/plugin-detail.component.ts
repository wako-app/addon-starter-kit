import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-detail',
  templateUrl: './plugin-detail.component.html',
  styleUrls: ['./plugin-detail.component.scss'],
  providers: [UpperCasePipe],
})
export class PluginDetailComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
