import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  async getClients() {
    return this.http.get<any>('http://localhost:3333/clients').subscribe(testes=>console.log('testeeeeeweeergfgh'))
  }

  async createClient(client: any) {
    return this.http.post<any>('http://localhost:3333/clients',client).subscribe(testes=>console.log('criou'))
  }


}
