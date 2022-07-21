import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  formPet: FormGroup;
  loading = false;
  tipoAnimal: String;

  constructor(
    private router: Router,
    private service: PetService, 
    private _snackBar: MatSnackBar,
    public modal: MatDialog,
    public dialogRef: MatDialogRef<AddPetComponent>
  ) { }

  ngOnInit(): void {
    this.formPet = new FormGroup({
      nome : new FormControl(''),
      idade : new FormControl(''),
      raca : new FormControl(''),
      imagem : new FormControl('')
    });
  }

  async createAgenda(){
    this.loading = true;
    let loginStorage = localStorage.getItem('login') as any;
    loginStorage = JSON.parse(loginStorage);
    (await this.service.createPet({
      nome: this.formPet.value.nome,
      idade: this.formPet.value.idade,
      raca: this.formPet.value.raca,
      tipo: this.tipoAnimal,
      imagem: this.formPet.value.imagem
    }, loginStorage.user)).subscribe(pet => {
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
