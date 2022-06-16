import { AgendaPetComponent } from './../agenda-pet/agenda-pet.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPetComponent } from '../add-pet/add-pet.component';

@Component({
  selector: 'app-agendas-nav',
  templateUrl: './agendas-nav.component.html',
  styleUrls: ['./agendas-nav.component.css']
})
export class AgendasNavComponent implements OnInit {

  pets = [
    {
      nomePet: 'Jojo',
      imagemPet: '../../../assets/imagePET/jojo.jpg',
      idade: '4',
      raca: 'vira-lata',
      cuidados:'LOREM'
    }, 
    {
      nomePet: 'Ninho',
      imagemPet: '../../../assets/imagePET/cat.jpg',
      idade: '2',
      raca: 'vira-lata',
      cuidados:'IPSUM'
    },{
      nomePet: 'Mylon',
      imagemPet: '../../../assets/imagePET/mylon.png',
      idade: '3',
      raca: 'poodle',
      cuidados:'OI'
    }
  ];

  constructor(public modal:MatDialog) { }

  ngOnInit(): void {
  }

  agendaPet(pet: any) {
    console.log(pet)
    this.modal.open(AgendaPetComponent, {data:{pet}});
  }

  adicionarPet() {
    const cadastroPet = this.modal.open(AddPetComponent);
  }

}
