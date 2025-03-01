import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";


@Injectable({
  providedIn: 'root'})
export class dbzService{

  public characters: Character[] = [];


  onNewCharacterEmitted( newCharacter: Character ):void {
    this.characters.push(newCharacter);

    this.characters.sort( (a , b ) => b.power - a.power );
  }

  onNewCharacterDeletedEmited( idDelete: string){

    this.characters= this.characters.filter( character =>  character.id !== idDelete )

  }
}
