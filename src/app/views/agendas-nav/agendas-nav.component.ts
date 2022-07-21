import { AgendaPetComponent } from './../agenda-pet/agenda-pet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPetComponent } from '../add-pet/add-pet.component';
import { HttpClient } from '@angular/common/http';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-agendas-nav',
  templateUrl: './agendas-nav.component.html',
  styleUrls: ['./agendas-nav.component.css']
})
export class AgendasNavComponent implements OnInit {
  pets: any;
  loading = false;
  constructor(
    public modal: MatDialog,
    private http: HttpClient,
    private service: PetService 
  ) { }

  async ngOnInit() {
    this.loading = true;
    let loginStorage = localStorage.getItem('login') as any;
    loginStorage = JSON.parse(loginStorage);
    (await this.service.getPets(loginStorage.user)).subscribe(pet => {
      this.update(pet);
      this.loading = false;
    });
    
  }

  async update(pet: any) {
    this.pets = pet;
    console.log(this.pets.pets)
  }

  agendaPet(pet: any) {
    console.log(pet)
    this.modal.open(AgendaPetComponent, {data:{pet}});
  }

  adicionarPet() {
    const cadastroPet = this.modal.open(AddPetComponent);
  }

}
