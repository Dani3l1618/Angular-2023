import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public superHeroName: string = 'Iron Man';
  public personalName: string = 'Tony Stark';
  public superHeroAge: number = 45;

  concatNameAndAge(): string {
    return `${this.superHeroName} - ${this.personalName} - ${this.superHeroAge}`;
  }

  changeHero() {
    this.superHeroName = 'Spiderman';
    this.personalName = 'Peter Parker';
  }

  changeAge() {
    this.superHeroAge = 22;
  }
}
