import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep-busca',
  templateUrl: './cep-busca.component.html',
  styleUrls: ['./cep-busca.component.css']
})
export class CepBuscaComponent implements OnInit {
  cep = '';

  constructor() { }

  ngOnInit() {
  }

}
