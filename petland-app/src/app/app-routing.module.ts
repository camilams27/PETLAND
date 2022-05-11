import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { LocaisComponent } from './components/locais/locais.component';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { SaudeComponent } from './components/saude/saude.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'login',
    component: LoginPageComponent
  },
  {
    path:'agenda',
    component: AgendaComponent
  },
  {
    path:'saude',
    component: SaudeComponent
  },
  {
    path:'locais',
    component: LocaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
