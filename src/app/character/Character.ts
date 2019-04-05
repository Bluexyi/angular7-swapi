import { Movie } from "src/app/movie/Movie"

export class Character {
    name: String;
    height: String;
    mass:  String;
    hair_color:  String;
    skin_color:  String;
    eye_color:  String;
    birth_year:  String;
    gender:  String;
    films:Array<Movie>;
}