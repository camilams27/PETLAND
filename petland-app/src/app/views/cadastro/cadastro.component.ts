import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ClientServiceService } from 'src/app/services/client-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  hide = true;
  constructor(private router: Router, private service: ClientServiceService) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome : new FormControl(''),
      login : new FormControl(''),
      telefone : new FormControl(''),
      email : new FormControl(''),
      dataNasc : new FormControl(''),
      senha : new FormControl('')
    })
    console.log(this.service.getClients())
  }

  async createClient() {
    console.log(moment(this.formulario.value['dataNasc']).format('DD/MM/YYYY').toString());
    console.log(await this.service.createClient({
      nome: this.formulario.value['nome'],
      login: this.formulario.value['login'],
      telefone: this.formulario.value['telefone'],
      email: this.formulario.value['email'],
      dataNasc: moment(this.formulario.value['dataNasc']).format('DD/MM/YYYY').toString(),
      senha: this.formulario.value['senha']
    }))
  }

}
