import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  valor$: Observable<number>;
  contadorSubscription: Subscription = null;

  constructor(
    public counterService: CounterService
  ) {
    this.valor$ = counterService
      .valorDoContador;
  }

  onUnsubscribeClick() {
    // this.valor.;
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
