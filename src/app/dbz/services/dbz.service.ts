import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters:Character[] = [
        {
            id:   uuid(),
            name:'Krilin',
            power:1000
        },
        {
            id:   uuid(),
            name:'Goku',
            power:2000
        },
        {
            id:   uuid(),
            name:'Picoro',
            power:1500
        }
    ];

    addCharacter( character:Character ):void{
        const newCharacter: Character = {
            id: uuid(),
            ...character
        }
        this.characters.push(newCharacter);
    }

    //onDeleteCharacter(indice:number){
        //this.characters.splice(indice,1);
    deleteCharacterById(id:string){
        // filter crea un nuevo array con todos los elementos 
        //que cumplen con la condición especificada en la 
        //función de devolución de llamada (callback).
        this.characters = this.characters.filter(character => character.id !== id)
    }

    
}