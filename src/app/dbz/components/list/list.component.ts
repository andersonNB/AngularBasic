import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 9500,
    },
  ];
  @Input()
  public print = (): void => {
    console.log(this.characterList);
  };
}
