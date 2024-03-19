import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} años `;
  }

  public changeHero(): void {
    this.name = 'Dr. Strange';
  }

  changeAge(): void {
    this.age = 40;
  }

  resetFields(): void {
    // this.name = 'Ironman';
    this.age = 45;

    //El ciclo de vida de Angular no se entera de que se ha modificado el valor de la propiedad name,
    // por lo que no se actualiza en la vista.
    document
      .querySelectorAll('h1')
      .forEach((element) => (element.innerHTML = 'Hero:Ironman'));
  }
}
