import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/services/client-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  formulario: FormGroup;
  loading = false;

  constructor(
    private service: ClientServiceService, 
    private _snackBar: MatSnackBar, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      login : new FormControl(''),
      senha : new FormControl('')
    });
  }

  async login() {
    this.loading = true;
    (await this.service.loginClient({
      login: this.formulario.value.login,
      senha: this.formulario.value.senha
    })).subscribe(login => {
      if(login.success) {
        localStorage.setItem('login', JSON.stringify({ login: true, user: login.nome }));
        this.router.navigate(['/home']).then(()=>{
          window.location.reload();
        })
      } else {
        this._snackBar.open(login.message, '', {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 2500
        });
      }
      this.loading = false;
    });
  }

}
