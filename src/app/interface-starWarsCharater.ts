import { InterfaceStartWarsMovie } from "./interface-starWarsMovie";

export interface InterfaceStartWarsCharacter {
    name: String;
    height: String;
    mass:  String;
    hair_color:  String;
    skin_color:  String;
    eye_color:  String;
    birth_year:  String;
    gender:  String;
    films:Array<InterfaceStartWarsMovie>;
}