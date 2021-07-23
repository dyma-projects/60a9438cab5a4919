import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice4',
  template: `
    <ul>
      <li *ngFor="let text of texts">{{ text }}</li>
    </ul>
  `,
})
export class Exercice4Component implements OnInit {

  public texts: Array<string> = ["un", "deux", "trois"];

  constructor() { }

  ngOnInit(): void {
  }

}
