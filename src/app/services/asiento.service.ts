import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { asiento } from '../models/asiento.model';

const baseUrl = 'http://localhost:4000/api';

@Injectable({
  providedIn: 'root',
})
export class asientoServise {
  constructor(private http: HttpClient) {}

  create(data: asiento): Observable<asiento> {
    return this.http.post(baseUrl+"/asiento", data);
  }

  getAsientoID(data: any): Observable<asiento> {
    return this.http.get(baseUrl+"/asiento", {params:data});
  }
}