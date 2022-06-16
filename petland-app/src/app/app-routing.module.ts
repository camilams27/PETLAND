import { DadosComponent } from './data/dados/dados.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { UrgenciaComponent } from './views/urgencia/urgencia.component';
import { AgendasNavComponent } from './views/agendas-nav/agendas-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialPageComponent } from './views/initial-page/initial-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { EquipeComponent } from './views/equipe/equipe.component';
import { AgendaPetComponent } from './views/agenda-pet/agenda-pet.component';

const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'agendas',
    component: AgendasNavComponent
  },
  {
    path: 'urgencia',
    component: UrgenciaComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
  {
    path: 'dados',
    component: DadosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
