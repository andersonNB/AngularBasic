import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'Mi-primera-app';
  public title: string = 'Mi-primera-app';
  public description: string = 'Curso de Angular';
}
