import { Injectable } from '@angular/core';
import { Episode, Movie, PluginBaseService, Show } from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';
import { logData } from './tools';

@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService) {
    super();
  }

  initialize() {
    logData('plugin initialized');

    const style = document.createElement('style');
    style.innerHTML = `
      .rating-container {
        background-color: grey
      }
    `;
    document.body.append(style);
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }

  customAction(action: string, data: any): any {}

  beforeMovieMiddleware(movie: Movie): Promise<Movie> {
    if (movie.ratings.imdb) {
      movie.ratings.imdb.imageUrl = 'https://eu.simkl.in/img_tv/ico-rating_imdb.png?v2';
    }
    return Promise.resolve(movie);
  }

  afterMovieMiddleware(movie: Movie): Promise<Movie> {
    return new Promise<Movie>((resolve) => {
      setTimeout(() => {
        if (!movie.ratings['myMovieRating']) {
          movie.ratings['myMovieRating'] = {
            name: 'myMovieRating',
            url: 'https://trakt.tv/assets/logos/header@2x-09f929ba67b0964596b359f497884cd9.png',
            rating: 1,
            votes: 123
          };
          resolve(movie);
        }
      }, 3000);
    });
  }

  beforeShowMiddleware(show: Show): Promise<Show> {
    if (show.ratings.imdb) {
      show.ratings.imdb.imageUrl = 'https://eu.simkl.in/img_tv/ico_rating_simkl.png';
    }
    return Promise.resolve(show);
  }

  afterShowMiddleware(show: Show): Promise<Show> {
    return new Promise<Show>((resolve) => {
      setTimeout(() => {
        if (!show.ratings['myShowRating']) {
          show.ratings['myShowRating'] = {
            name: 'myShowRating',
            url: 'https://trakt.tv/assets/logos/header@2x-09f929ba67b0964596b359f497884cd9.png',
            rating: 3,
            votes: 456
          };
          resolve(show);
        }
      }, 3000);
    });
  }

  beforeEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    if (episode.ratings.imdb) {
      episode.ratings.imdb.imageUrl =
        'https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg';
    }
    return Promise.resolve(episode);
  }

  afterEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    if (show.type === 'anime') {
      episode.imagesUrl.poster = 'https://simkl.in/posters/10/10361285fce228d8a_m.webp';
    }
    return Promise.resolve(episode);
  }
}
