import { NgModule } from '@angular/core';

import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const appRoutes = [
  {
    path: 'cep', component: CepBuscaComponent,
  }, {
    path: 'cep/:cep', component: CepDetailsComponent,
  }
];

@NgModule({
  declarations: [
    CepDetailsComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    CommonModule
  ]
})
export class CepModule {
}
