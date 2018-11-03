import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  aumentar() {
    this.counter++;
  }

  diminuir() {
    this.counter--;
  }

}
