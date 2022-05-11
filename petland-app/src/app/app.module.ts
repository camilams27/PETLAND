import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './template/header-component/header-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentComponentComponent } from './template/content-component/content-component.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { FooterComponentComponent } from './template/footer-component/footer-component.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AgendaComponent } from './components/agenda/agenda.component';
import { SaudeComponent } from './components/saude/saude.component';
import { LocaisComponent } from './components/locais/locais.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    HomePageComponent,
    LoginPageComponent,
    AgendaComponent,
    SaudeComponent,
    LocaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
