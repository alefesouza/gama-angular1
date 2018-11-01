import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valorAtual = 0;
  contadorSubscription: Subscription = null;

  constructor(
    public counterService: CounterService
  ) {
    this.contadorSubscription = counterService
      .valorDoContador
      .subscribe((value) => {
        this.valorAtual = value;
        console.log(value);
      });
  }

  onUnsubscribeClick() {
    this.contadorSubscription.unsubscribe();
  }

  ngOnInit() {
  }

  aumentarContador() {
    this.counterService.aumentar();
  }

  diminuirContador() {
    this.counterService.diminuir();
  }

}
