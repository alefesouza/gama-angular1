import { NgModule } from '@angular/core';

import { CepDetailsComponent } from './cep-details/cep-details.component';
import { CepExibicaoComponent } from './cep-exibicao/cep-exibicao.component';
import { CepBuscaComponent } from './cep-busca/cep-busca.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [{
    path: '', component: CepBuscaComponent,
  }, {
    path: ':cep', component: CepDetailsComponent,
}];

@NgModule({
  declarations: [
    CepDetailsComponent,
    CepExibicaoComponent,
    CepBuscaComponent,
  ],
  imports: [
    RouterModule.forChild(appRoutes),
    FormsModule,
    CommonModule
  ]
})
export class CepModule {

}
