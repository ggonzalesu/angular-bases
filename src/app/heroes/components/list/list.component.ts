import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroName: string[] = [
    'spiderman',
    'iroman',
    'hulk',
    'she hulk',
    'Thor',
    'Linterna verde',
  ];

  public deleteHero?: string;

  removeLastHero(): void {
    this.deleteHero = this.heroName.pop();
  }
}
