import { Component, OnInit } from '@angular/core';
import { BuscadorCepService } from '../buscador-cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cep-details',
  templateUrl: './cep-details.component.html',
  styleUrls: ['./cep-details.component.css']
})
export class CepDetailsComponent implements OnInit {
  resultado = {};

  constructor(
    private buscadorCep: BuscadorCepService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params => {
      buscadorCep.getCep(params.cep).subscribe((valor) => {
        console.log(valor);
        this.resultado = valor;
      });
    });

  }

  ngOnInit() {
  }

}
