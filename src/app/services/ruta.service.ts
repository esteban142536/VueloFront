import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ruta } from '../models/ruta.model';

const baseUrl = 'http://localhost:4000/api';

@Injectable({
  providedIn: 'root',
})
export class rutaServise {
  constructor(private http: HttpClient) {}

  create(data: ruta): Observable<ruta> {
    return this.http.post(baseUrl+"/ruta", data);
  }

  getRutaID(data: any): Observable<ruta> {
    return this.http.get(baseUrl+"/ruta", {params:data});
  }
}