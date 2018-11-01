import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';
  itemApp = 'Maça';

  itens: number[] = [3, 4];

  constructor() {
    setTimeout(() => {
      this.itemApp = 'Banana';
    }, 2000);
  }

  addNumber() {
    this.itens.unshift(Math.random());
  }

  onDeleteItem(item: number) {
    this.itens.splice(item, 1);
  }
}
