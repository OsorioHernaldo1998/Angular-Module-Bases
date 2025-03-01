import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid'

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0
  }


  emitCharacter( ) : void {

    console.log(this.character);

    if (this.character.name.trim() === '' ){

      return}

    this.character.id = v4();

    this.onNewCharacter.emit({...this.character});

    this.character.name = '';
    this.character.power = 0;

  }


}
