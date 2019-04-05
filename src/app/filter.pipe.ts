import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter' //nom du filtre (indiqué dans le ngFor)
})

export class FilterPipe implements PipeTransform {

    characterTabFilter: any[] = [];

  transform(characterTab: any[], saisieNameCharacter: string): any[] {
    
    this.characterTabFilter = []; //Vide le tab
    saisieNameCharacter = saisieNameCharacter.toLowerCase();

    if(!characterTab) return []; // si le tab à filtrer n'est pas vide
    if(!saisieNameCharacter) return characterTab; //Si le input n'est pas vide

    console.log(",dslk,vlsflkvnefkùvnùkrldsvjervjlkevjlkerjvklerklvnerùlk");

    for(var character of characterTab){
        if (character.name.toLowerCase().includes(saisieNameCharacter)){
            this.characterTabFilter.push(character);
            console.log("name : ", character.name);
        }
    }

    return this.characterTabFilter;
   }
}