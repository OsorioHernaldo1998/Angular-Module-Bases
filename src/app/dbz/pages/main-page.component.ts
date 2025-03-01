import{ Component }from '@angular/core';
import { dbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component ({
  standalone: false,
  selector: 'app-main-dbz-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  constructor( private dbzService: dbzService){

  }

  get serviceCharacters(): Character[] {
    return [...this.dbzService.characters]
  }

  deleteCharacterById( id:string ) {
    this.dbzService.onNewCharacterDeletedEmited( id );
  }

  createNewCharacter( character: Character){
    this.dbzService.onNewCharacterEmitted(character)
  }

  }
