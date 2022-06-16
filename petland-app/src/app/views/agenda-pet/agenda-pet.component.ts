import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  pet: {
    nomePet: string;
    idade: string;
    imagemPet: string;
    raca: string;
    cuidados: string;
  }
}

@Component({
  selector: 'app-agenda-pet',
  templateUrl: './agenda-pet.component.html',
  styleUrls: ['./agenda-pet.component.css']
})
export class AgendaPetComponent implements OnInit {

 
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  
  
}
