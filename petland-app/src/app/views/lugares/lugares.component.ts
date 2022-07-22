import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css'],
})
export class LugaresComponent implements OnInit {
  public map: any;
  pets: any;

  constructor(
    private service: PetService ) {}

  async ngOnInit() {
    let loginStorage = localStorage.getItem('login') as any;
    loginStorage = JSON.parse(loginStorage);
    (await this.service.getPets(loginStorage.user)).subscribe(pet => {
      this.update(pet)
    });

    var promisePosicoes = new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        resolve({ latitude, longitude });
      });
    });
    promisePosicoes.then((value: any) => {
      this.map = L.map('map', {
        scrollWheelZoom: false,
      }).setView([value.latitude, value.longitude], 15);

      //importes de cores
      var goldIcon = new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      var violetIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      var redIcon = new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      var greenIcon = new L.Icon({
        iconUrl:
          'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '© <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
      }).addTo(this.map);

      //marcadores
      L.marker([value.latitude, value.longitude])
        .addTo(this.map)
        .bindPopup('Você está aqui');
      L.marker([-7.950759, -34.861251], { icon: greenIcon })
        .addTo(this.map)
        .bindPopup('Casa de ração');

      L.marker([-7.949388281663459, -34.85884774093595], { icon: greenIcon })
        .addTo(this.map)
        .bindPopup('Casa de ração');

      L.marker([-7.9462563332663505, -34.85815237809793], { icon: redIcon })
        .addTo(this.map)
        .bindPopup('PetShop');

      L.marker([-7.945604173109244, -34.858831647749355], { icon: goldIcon })
        .addTo(this.map)
        .bindPopup('Vacinação');

        // marcadores de pets reais

      if(this.pets.pets){
        for(const pet of this.pets.pets){
          if(pet.latitude && pet.longitude){
            L.marker([pet.latitude, pet.longitude], { icon: violetIcon })
        .addTo(this.map)
        .bindPopup(pet.nome);
          }
        }
      }
    });
  }
  async update(pet: any) {
    this.pets = pet;
    console.log(this.pets.pets)
  }
}
