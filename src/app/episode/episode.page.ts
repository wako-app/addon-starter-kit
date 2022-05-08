import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Episode, Show } from '@wako-app/mobile-sdk';
import { PluginLoaderService } from '../services/plugin-loader.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss'],
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
      `{"show":{"provider":"trakt","type":"show","ids":{"trakt":138163,"slug":"the-witcher-2019","tvdb":"362696","imdb":"tt5180504","tmdb":71912,"tvrage":null},"title":"The Witcher","overview":"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"},"firstAired":"2019-12-20T08:00:00.000Z","year":2019,"certification":"TV-MA","runtime":60,"genres":["drama","action","adventure","fantasy","science-fiction"],"alternativeTitles":{"sa":"الساحر","bg":"Вещерът","cz":"Zaklínač","gr":"Ο Γητευτής","us":"The Witcher","ir":"ویچر","fi":"The Witcher – Noituri","il":"המכשף","hr":"Vještac","hu":"Vaják","jp":"ウィッチャー","ge":"მხედვარი","kr":"위쳐","lt":"Raganius","lv":"Raganis","pl":"Wiedźmin","ru":"Ведьмак","sk":"Zaklínač","rs":"Вештац","th":"เดอะ วิทเชอร์ นักล่าจอมอสูร","ua":"Відьмак","vn":"Thợ Săn Quái Vật","tw":"獵魔士","cn":"猎魔人","hk":"獵魔士"},"originalTitle":"The Witcher","ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt5180504","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163","rating":8.2,"votes":13446}},"rating":8.2,"votes":13446,"status":"returning series","totalEpisodesWatched":0,"trailer":null,"language":"us","network":"Netflix","airedEpisodes":16,"images_url":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"},"imdbId":"tt5180504","traktId":138163,"tmdbId":71912},"episode":{"provider":"trakt","type":"episode","title":"Of Banquets, Bastards and Burials","overview":"Against his better judgment, Geralt accompanies Jaskier to a royal ball. Ciri wanders into an enchanted forest. Yennefer tries to protect her charges.","rating":7.9,"votes":4434,"imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"},"ids":{"trakt":3790232,"tvdb":"7428571","imdb":"tt8343772","tmdb":1954614,"tvrage":null},"ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt8343772","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163/seasons/1/episodes/4","rating":7.9,"votes":4434}},"seasonNumber":1,"number":4,"absoluteNumber":4,"code":"S01E04","firstAired":"2019-12-20T08:00:00.000Z","runtime":62,"watched":false,"images_url":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"},"imdbId":"tt8343772","trakt":3790232,"tmdbId":1954614,"traktSeasonNumber":1,"traktNumber":4}}`
    );

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);

    this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);

    this.pluginLoader.createComponent('shows', this.showVCRef, this.data);
  }
}
