import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [];


  @Output()
  OnDeleteCharacterIndex: EventEmitter<string> = new EventEmitter();


  emitDeleteCharacter( id: string) : void{
    console.log(id);

    this.OnDeleteCharacterIndex.emit(id)

  }


  }




