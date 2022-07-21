import { FormControl, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  pet: {
    nome: string;
    idade: string;
    imagem: string;
    raca: string;
    cuidados: string;
  }
}

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.component.html',
  styleUrls: ['./agenda-edit.component.css']
})
export class AgendaEditComponent implements OnInit {
  formPet: FormGroup;
  loading = false;
  tipoAnimal: String;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: DialogData,
    public modal:MatDialog,
    private router: Router,
    private service: PetService, 
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AgendaEditComponent>
  ) { }

  ngOnInit(): void {
    this.formPet = new FormGroup({
      nome : new FormControl(''),
      idade : new FormControl(''),
      raca : new FormControl(''),
      imagem : new FormControl('')
    });
    console.log(this.data);
    //fzr for
    this.formPet.controls['nome'].setValue(this.data.pet.nome);
    this.formPet.controls['idade'].setValue(this.data.pet.idade);
    this.formPet.controls['raca'].setValue(this.data.pet.raca);
    this.formPet.controls['imagem'].setValue(this.data.pet.imagem);
  }

  async atualizarAgenda(){
    this.loading = true;
    let loginStorage = localStorage.getItem('login') as any;
    loginStorage = JSON.parse(loginStorage);
    (await this.service.updatePet(loginStorage.user,{
      nome: this.formPet.value.nome,
      idade: this.formPet.value.idade,
      raca: this.formPet.value.raca,
      tipo: this.tipoAnimal,
      imagem: this.formPet.value.imagem,
      antigoNome: this.data.pet.nome
    })).subscribe(pet => {
      this._snackBar.open(pet.message, '', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 2500
      });
      if(pet.success) {
        this.dialogRef.close();
        window.location.reload();
      }
      this.loading = false;
    });
  }

  selectAnimal(event: any){
    this.tipoAnimal = event;
  }
}
