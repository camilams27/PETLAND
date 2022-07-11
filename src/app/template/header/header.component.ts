import { CadastroComponent } from './../../views/cadastro/cadastro.component';
import { LoginComponent } from './../../views/login/login.component';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { FaleConoscoComponent } from 'src/app/views/fale-conosco/fale-conosco.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logado: boolean;
  olaLogin: string;
  loginStorage: any;

  constructor(
    public modal:MatDialog,
    private router: Router
  ){ }

  ngOnInit(): void {
    this.loginStorage = localStorage.getItem('login');
    if (this.loginStorage) {
      this.loginStorage = JSON.parse(this.loginStorage);
      this.logado = this.loginStorage.login;
      this.olaLogin = this.loginStorage.user;
    }
  }

  Entrar() {
    const entrar = this.modal.open(LoginComponent);
  }

  Cadastrar() {
    const cadastro = this.modal.open(CadastroComponent);
  }

  FaleConosco() {
    const FaleConosco = this.modal.open(FaleConoscoComponent);
  }

  Sair() {
    localStorage.removeItem('login');
    this.router.navigate(['/']).then(()=>{
      window.location.reload();
    })
  }

}
