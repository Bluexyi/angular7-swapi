import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { InterfaceStartWarsMovie } from "./interface-starWarsMovie";
import { error } from 'util';
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

export class AppComponent implements OnInit{
  title = 'app';

  saisieNumEpisode: string = "4";

  detailFilm: InterfaceStartWarsMovie[];

  constructor(private apiSerivce: ApiService){}

  getPosts(): void {
    var url =this.apiSerivce.createURL(this.saisieNumEpisode);
    this.apiSerivce.getPostsApi(url).
       subscribe(
       resultArray => {
        this.detailFilm = resultArray;
        console.log("result===>",resultArray); 
       } 
       );
  }

  ngOnInit(): void{
    this.getPosts();
  }

}
