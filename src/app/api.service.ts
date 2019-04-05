import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse, HttpResponseBase} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  
  constructor(private http: HttpClient ) {}

  urlAllCharacters: string = "https://swapi.co/api/people/?format=json"
 
 createURLMovie(numEpisode): string {
   var urlApi: string = "https://swapi.co/api/films/" + numEpisode + "/?format=json";
   return urlApi;
 }

 
 getPostsApi(url: string): Observable<any>{
  console.log("result===>",this.http.get(url).pipe(map(res => res))); 
   return this.http.get(url);
  }

  getMovieForCharacter(url: string): Observable<any>{
    console.log("result===>",this.http.get(url).pipe(map(res => res))); 
     return this.http.get(url).pipe(map(res => res));
    }
  
 private handleError(error: Response) {
   return Observable.throw(error.statusText);
 }

 getCharactersApi(): Observable<any>{
  console.log("result===>",this.http.get(this.urlAllCharacters).pipe(map(res => res))); 
  return this.http.get(this.urlAllCharacters).pipe(map(res => res));
 }



 

}
//https://swapi.co/api/films/2/?format=json
//https://swapi.co/api/people/?format=json