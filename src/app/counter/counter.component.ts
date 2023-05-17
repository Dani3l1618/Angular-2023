import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Clicks: {{ microbios }}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetMicrobios()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public microbios: number = 10;

  increaseBy(value: number): void {
    this.microbios += value;
  }

  resetMicrobios(value: number = 10) {
    this.microbios = value;
  }
}
