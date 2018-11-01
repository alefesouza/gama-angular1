import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  counter = 0;
  title = 'Fazer compras';
  @Input() indice: number;
  @Input() item: number;
  @Input() avisar: number;
  @Input() mostrarContador: boolean;
  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  onButtonClick() {
    this.title = 'Valor mudado';
  }

  onLogButtonClick(numero: number) {
    console.log(numero);
  }

  onDeleteButtonClick(i: number) {
    this.deleteItem.emit(i);
  }

}
