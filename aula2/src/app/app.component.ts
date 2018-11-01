import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula2';
  valorAtual = 0;

  constructor(
    public counterService: CounterService
  ) {
    const observable = counterService.valorDoContador
      .pipe(
        debounceTime(1000),
        map(v => v * 2)
      )
      .subscribe((value) => {
        console.log(value);
        this.valorAtual = value;

        if (value > 10) {
          observable.unsubscribe();
        }
      });
  }

}
