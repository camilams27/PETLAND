import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private http: HttpClient
  ) { }

  async getPets(login: String): Promise<Observable<any>> {
    return this.http.get<any>(`https://teste-355700.uc.r.appspot.com/pets/${login}`)
  }

  async createPet(pet: any, login: String): Promise<Observable<any>> {
    return this.http.post<any>(`https://teste-355700.uc.r.appspot.com/pets/${login}`, pet)
  }

  async updatePet(login: String, pet: any ): Promise<Observable<any>> {
    return this.http.put<any>(`https://teste-355700.uc.r.appspot.com/pets/${login}`, pet)
  }

  async deletePet(login: String, nome: String ): Promise<Observable<any>> {
    return this.http.delete<any>(`https://teste-355700.uc.r.appspot.com/pets/${login}/${nome}`)
  }
}
