import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { InterfaceStartWarsMovie } from "./interface-starWarsMovie";
import { InterfaceStartWarsCharacter } from "./interface-starWarsCharater";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{

  saisieNumEpisode: string = "4";
  detailFilm: InterfaceStartWarsMovie[];

  saisieNameCharacter : string = "";
  detailCharacter: InterfaceStartWarsCharacter[];

  constructor(private apiSerivce: ApiService){}

  getMovie(): void {
    var url =this.apiSerivce.createURLMovie(this.saisieNumEpisode);
    this.apiSerivce.getPostsApi(url)
       .subscribe( res => { this.detailFilm = res; }
       );
  }

  getMovieCharacter(url: string): void {
    this.apiSerivce.getMovieForCharacter(url)
       .subscribe(
       res => {
        this.detailFilm = res;
        console.log("result===>",res); 
       } 
       );
  }

  getCharacter(): void {
    this.apiSerivce.getCharactersApi().
       subscribe(
       res => {
        this.detailCharacter = res.results;
        console.log("result===>",res.results); 
        console.log("detailcharacter ===>", this.detailCharacter); 
       } 
       );
  }

  ngOnInit(): void{
    this.getMovie();
    this.getCharacter();
  }

}
