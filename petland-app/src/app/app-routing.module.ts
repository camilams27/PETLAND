import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { AgendaComponent } from './components/agenda/agenda.component';
import { LocaisComponent } from './components/locais/locais.component';
import { SaudeComponent } from './components/saude/saude.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  // {
  //   path: 'cadastro',
  //   component: 
  // },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
