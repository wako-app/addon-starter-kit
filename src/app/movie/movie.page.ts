import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Movie } from '@wako-app/mobile-sdk';
import { PluginLoaderService } from '../services/plugin-loader.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'movie.page.html',
  styleUrls: ['movie.page.scss'],
})
export class MoviePage implements OnInit {
  @ViewChild('movieRef', { read: ViewContainerRef, static: true })
  movieVCRef: ViewContainerRef;

  data: { movie: Movie };

  constructor(private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    const data = JSON.parse(
      `{"movie":{"provider":"trakt","type":"movie","ids":{"trakt":5573,"slug":"big-buck-bunny-2008","imdb":"tt1254207","tmdb":10378},"title":"Big Buck Bunny","overview":"Follow a day of the life of Big Buck Bunny when he meets three bullying rodents: Frank, Rinky, and Gamera. The rodents amuse themselves by harassing helpless creatures by throwing fruits, nuts and rocks at them. After the deaths of two of Bunny's favorite butterflies, and an offensive attack on Bunny himself, Bunny sets aside his gentle nature and orchestrates a complex plan for revenge.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/i9jJzvoXET4D9pOkoEwncSdNNER.jpg","backdrop":"https://image.tmdb.org/t/p/w500/xtdybjRRZ15mCrPOvEld305myys.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/i9jJzvoXET4D9pOkoEwncSdNNER.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/xtdybjRRZ15mCrPOvEld305myys.jpg"},"year":2008,"certification":"G","runtime":8,"genres":["animation","comedy","family"],"alternativeTitles":{"cz":"Králíkova pomsta","us":"Big Buck Bunny","ro":"Iepurașul mare","ru":"Большой Бак","cn":"大雄兔"},"originalTitle":"Big Buck Bunny","ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt1254207","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/movies/5573","rating":7,"votes":446}},"rating":7,"votes":446,"status":"Released","released":"2008-04-10","relatedImdbIds":[],"trailer":"http://youtube.com/watch?v=yUQM7H4Swgw","language":"en","tagline":"","images_url":{"poster":"https://image.tmdb.org/t/p/w342/i9jJzvoXET4D9pOkoEwncSdNNER.jpg","backdrop":"https://image.tmdb.org/t/p/w500/xtdybjRRZ15mCrPOvEld305myys.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/i9jJzvoXET4D9pOkoEwncSdNNER.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/xtdybjRRZ15mCrPOvEld305myys.jpg"},"imdbId":"tt1254207","traktId":5573,"tmdbId":10378}}`
    );

    this.data = {
      movie: data.movie,
    };

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('movies', this.movieVCRef, this.data);
  }
}
