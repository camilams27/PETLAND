import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { ClientServiceService } from 'src/app/services/client-service.service';

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
      ultimoNome : new FormControl(''),
      telefone : new FormControl(''),
      email : new FormControl(''),
      dataNasc : new FormControl(''),
      senha : new FormControl('')
    })
    console.log(this.service.getClients())
  }

  createClient() { 
    console.log(this.formulario.value)
  }

}
