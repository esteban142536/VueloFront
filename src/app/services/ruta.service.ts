import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ruta } from '../models/ruta.model';

const baseUrl = 'http://localhost:4000/api/ruta';

@Injectable({
  providedIn: 'root',
})
export class rutaServise {
  constructor(private http: HttpClient) {}

  create(data: ruta): Observable<ruta> {
    return this.http.post(baseUrl, data);
  }

  getRutaID(data: any): Observable<ruta> {
    return this.http.get(baseUrl, { params: data });
  }

  updateRuta(data: ruta): Observable<ruta> {
    return this.http.put(baseUrl+'/'+data._id, data);
  }
}
