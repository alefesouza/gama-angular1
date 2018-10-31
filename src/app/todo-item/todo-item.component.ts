import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  counter = 0;
  title = 'Fazer compras';
  @Input() item;
  @Input() avisar;
  @Input() mostrarContador;

  constructor() { }

  ngOnInit() {
    console.log(this.item);

    setInterval(() => {
      this.counter++;
    }, 1000);

    setTimeout(() => {
      this.title = 'Compras feitas';
    }, 2000);
  }

}
