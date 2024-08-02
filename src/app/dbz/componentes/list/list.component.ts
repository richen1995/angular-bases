import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  
  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks',
      power: 10
    },
    {
      name:'Vegeta',
      power: 20
    },
    {
      name:'Goku',
      power: 30
    }
]

  onDeleteCharacter(id?:string):void{
    if(!id) return; //Si el ID no existe no emite nada
    this.onDelete.emit(id)
        //deleteCharacterByID(string : id){
    //Emitir un IDE del personaje
    console.log({id});
  }
}
 