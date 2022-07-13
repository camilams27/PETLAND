import { DadosComponent } from './data/dados/dados.component';
import { UrgenciaComponent } from './views/urgencia/urgencia.component';
import { AgendasNavComponent } from './views/agendas-nav/agendas-nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialPageComponent } from './views/initial-page/initial-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { EquipeComponent } from './views/equipe/equipe.component';
import { LugaresComponent } from './views/lugares/lugares.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AcessComponent } from './views/acess/acess.component';
import { LoginGuard } from './login-guard';

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
    canActivate: [LoginGuard],
    component: HomePageComponent
  },
  {
    path: 'agendas',
    canActivate: [LoginGuard],
    component: AgendasNavComponent
  },
  {
    path: 'urgencia',
    canActivate: [LoginGuard],
    component: UrgenciaComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
  {
    path: 'lugares',
    canActivate: [LoginGuard],
    component: LugaresComponent
  },
  {
    path: 'acesso-negado',
    component: AcessComponent
  },
  { path: '**', 
    pathMatch: 'full', 
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
