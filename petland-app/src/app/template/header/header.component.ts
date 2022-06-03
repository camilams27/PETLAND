import { CadastroComponent } from './../../views/cadastro/cadastro.component';
import { LoginComponent } from './../../views/login/login.component';
import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { FaleConoscoComponent } from 'src/app/views/fale-conosco/fale-conosco.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modal:MatDialog){ }

  ngOnInit(): void {
  }

  Entrar(){
    const entrar = this.modal.open(LoginComponent);
  }

  Cadastrar(){
    const cadastro = this.modal.open(CadastroComponent);
  }

  FaleConosco(){
    const FaleConosco = this.modal.open(FaleConoscoComponent);
  }
}
