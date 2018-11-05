import { Component, OnInit } from '@angular/core';
import { BuscadorCepService } from '../buscador-cep.service';

@Component({
  selector: 'app-cep-busca',
  templateUrl: './cep-busca.component.html',
  styleUrls: ['./cep-busca.component.css']
})
export class CepBuscaComponent implements OnInit {
  cep = '';
  resultado = null;

  constructor(
    private buscadorCepService: BuscadorCepService
  ) { }

  ngOnInit() {
  }

  buscarCep() {
    this.buscadorCepService
      .getCep(this.cep)
      .subscribe((value) => {
        this.resultado = value;
      });
  }

}
