import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 500,
      id: uuid(),
    },
    {
      name: 'Goku',
      power: 1200,
      id: uuid(),
    },
  ];
  constructor() {}

  addCharacter(event: Character) {
    const newCharacter: Character = { ...event, id: uuid() };
    this.characters.push(newCharacter);
    console.log(this.characters);
  }

  onDeleteById(id: string) {
    console.log({ id });

    if (id === undefined) return;
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
