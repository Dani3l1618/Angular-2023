import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() characterList: Character[] = [];
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  deleteHeroe(ix: string) {
    this.onDelete.emit(ix);
  }
}
