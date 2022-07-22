import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(
    private http: HttpClient
  ) { }

  async getClients() {
    return await this.http.get<any>('https://petland-bxg3nq4da-camilams27.vercel.app/clients')
  }

  async loginClient(client: any): Promise<Observable<any>> {
    return this.http.post<any>('https://petland-bxg3nq4da-camilams27.vercel.app/clients/login', client)
  }

  async createClient(client: any): Promise<Observable<any>> {
    return this.http.post<any>('https://petland-bxg3nq4da-camilams27.vercel.app/clients', client)
  }

}
