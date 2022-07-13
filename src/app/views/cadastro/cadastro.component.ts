import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ClientServiceService } from 'src/app/services/client-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  loading = false;

  constructor(
    private router: Router, 
    private service: ClientServiceService, 
    private _snackBar: MatSnackBar,
    public modal: MatDialog,
    public dialogRef: MatDialogRef<CadastroComponent>
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome : new FormControl(''),
      login : new FormControl(''),
      telefone : new FormControl(''),
      email : new FormControl(''),
      dataNasc : new FormControl(''),
      senha : new FormControl('')
    })
  }

  async createClient() { 
    this.loading = true;
    (await this.service.createClient({
      nome: this.formulario.value.nome,
      login: this.formulario.value.login,
      telefone: this.formulario.value.telefone,
      email: this.formulario.value.email,
      dataNasc: this.formulario.value.dataNasc,
      senha: this.formulario.value.senha
    })).subscribe(client => {
      this._snackBar.open(client.message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2500
      });
      if(client.success) {
        this.dialogRef.close();
      }
      this.loading = false;
    });
  }
}
