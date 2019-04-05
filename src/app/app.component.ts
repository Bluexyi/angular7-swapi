import { Component , OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Movie } from './movie/Movie';
import { Character } from './character/Character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit {

  saisieNumEpisode: string = '4';
  detailFilm: Movie[];

  saisieNameCharacter: string = '';
  detailCharacter: Character[];

  constructor(private apiSerivce: ApiService) {}

  getMovie(): void {
    if (parseInt(this.saisieNumEpisode, 10) > 7 ) { this.saisieNumEpisode = '7'; }
    this.apiSerivce.getPostsApi(this.apiSerivce.createURLMovie(this.saisieNumEpisode))
      .subscribe( res => { this.detailFilm = res; }
      );
  }

  getMovieCharacter(url: string): void {
    this.apiSerivce.getMovieForCharacter(url)
       .subscribe(
       res => {
        this.detailFilm = res;
       }
       );
  }

  getCharacter(): void {
    this.apiSerivce.getCharactersApi().
       subscribe(
       res => {
        this.detailCharacter = res.results;
       }
       );
  }

  ngOnInit(): void {
    this.getMovie();
    this.getCharacter();
  }

}
