import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  async getClients() {
    return await this.http.get<any>('http://localhost:3333/clients')
  }

  async loginClient(client: any): Promise<Observable<any>> {
    return this.http.post<any>('http://localhost:3333/clients/login', client)
  }

  async createClient(client: any): Promise<Observable<any>> {
    return this.http.post<any>('http://localhost:3333/clients', client)
  }

}
