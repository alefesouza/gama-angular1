import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  valorDoContador = 0;

  constructor() { }

  aumentar() {
    this.valorDoContador++;
  }

  diminuir() {
    this.valorDoContador--;
  }

}
