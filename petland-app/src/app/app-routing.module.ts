import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { UrgenciaComponent } from './views/urgencia/urgencia.component';
import { AgendasNavComponent } from './views/agendas-nav/agendas-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InitialPageComponent } from './views/initial-page/initial-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

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
    path: 'fale-conosco',
    component: FaleConoscoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
