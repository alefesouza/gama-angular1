import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor(
    public counterService: CounterService
  ) { }

  ngOnInit() {
  }

  aumentarContador() {
    this.counterService.aumentar();
  }

  diminuirContador() {
    this.counterService.diminuir();
  }

}
