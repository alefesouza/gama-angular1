import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges, OnDestroy {

  counter = 0;
  title = 'Fazer compras';
  @Input() indice: number;
  @Input() item: number;
  @Input() avisar: number;
  @Input() mostrarContador: boolean;
  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.indice) {
      console.log('O índice do item ' + this.item + ' era ' + changes.indice.previousValue + ' e agora é ' + changes.indice.currentValue);
    }
  }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnDestroy() {
    console.log('O item ' + this.item + ' saiu da tela');
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
