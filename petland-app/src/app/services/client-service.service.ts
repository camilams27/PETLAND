import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  async getClients() {
    return await this.http.get<any>('http://localhost:3333/clients').subscribe(testes=>console.log('testeeeeeweeergfgh'))
  }

}
