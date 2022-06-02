import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CadastroComponent } from './../cadastro/cadastro.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  constructor(public modal:MatDialog) { }

  ngOnInit(): void {
  }

  Cadastrar(){
    const cadastro = this.modal.open(CadastroComponent,{
      width: "50%",
      height: "60%"
    });
  }

}
