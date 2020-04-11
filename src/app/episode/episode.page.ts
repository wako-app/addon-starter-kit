import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PluginLoaderService } from '../services/plugin-loader.service';
import { Episode, Show } from '@wako-app/mobile-sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss']
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', { read: ViewContainerRef, static: true })
  episodeVCRef: ViewContainerRef;

  @ViewChild('episodeItemOptionRef', { read: ViewContainerRef, static: true })
  episodeItemOptionVCRef: ViewContainerRef;

  @ViewChild('showRef', { read: ViewContainerRef, static: true })
  showVCRef: ViewContainerRef;

  data: { show: Show; episode: Episode };

  constructor(private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.data = JSON.parse(
      `{"show":{"title":"The Witcher","year":2019,"imdbId":"tt5180504","tmdbId":71912,"tvdbId":362696,"traktId":138163,"slug":"the-witcher-2019","overview":"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.","trailer":"http://youtube.com/watch?v=ndl1W4ltcmg","firstAired":"2019-12-20T08:00:00.000Z","runtime":60,"rating":8.5,"votes":2556,"language":"en","genres":["fantasy","science-fiction","drama"],"certification":"TV-MA","airedEpisodes":8,"images_url":{"poster":"https://image.tmdb.org/t/p/w300/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg","backdrop":"https://image.tmdb.org/t/p/w500/kysKBF2CJG9qfQDSCDaboJrkZy1.jpg","poster_original":"https://image.tmdb.org/t/p/original/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg","backdrop_original":"https://image.tmdb.org/t/p/original/kysKBF2CJG9qfQDSCDaboJrkZy1.jpg"},"status":"returning series","network":"Netflix","alternativeTitles":{"sa":"الساحر","bg":"Вещерът","cz":"Zaklínač","dk":"The Witcher","de":"The Witcher","gr":"Ο Γητευτής","us":"The Witcher","es":"The Witcher","mx":"The Witcher","ca":"The Witcher","fr":"The Witcher","il":"המכשף","hu":"Vaják","it":"The Witcher","kr":"위쳐","lt":"Raganius","nl":"The Witcher","pl":"Wiedźmin","br":"The Witcher","pt":"The Witcher","ro":"The Witcher","ru":"Ведьмак","sk":"Zaklínač","rs":"Вештац","se":"The Witcher","tr":"Cadı","ua":"Відьмак","cn":"猎魔人","tw":"獵魔士"},"originalTitle":"The Witcher"},"episode":{"traktSeasonNumber":1,"traktNumber":4,"absoluteNumber":4,"code":"S01E04","title":"Of Banquets, Bastards and Burials","imdbId":"tt8343772","tmdbId":1954614,"tvdbId":7428571,"traktId":3790232,"overview":"Against his better judgment, Geralt accompanies Jaskier to a royal ball. Ciri wanders into an enchanted forest. Yennefer tries to protect her charges.","firstAired":"2019-12-20T08:00:00.000Z","rating":8,"votes":2001,"runtime":60,"watched":false}}`
    );

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);

    this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);

    this.pluginLoader.createComponent('shows', this.showVCRef, this.data);
  }
}
