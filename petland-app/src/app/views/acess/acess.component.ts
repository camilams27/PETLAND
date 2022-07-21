import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.css']
})
export class AcessComponent implements OnInit {

  constructor(
    public modal:MatDialog
  ) { }

  ngOnInit(): void {
  }

  Entrar() {
    const entrar = this.modal.open(LoginComponent);
  }

  Cadastrar() {
    const cadastro = this.modal.open(CadastroComponent);
  }

}
