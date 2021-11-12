import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tipoAvion } from '../models/tipoAvion.model';

const baseUrl = 'http://localhost:4000/api/tipoAvion';

@Injectable({
  providedIn: 'root',
})
export class tipoAvionServise {
  constructor(private http: HttpClient) {}

  create(data: tipoAvion): Observable<tipoAvion> {
    return this.http.post(baseUrl, data);
  }

  update(data: tipoAvion): Observable<tipoAvion> {
    return this.http.put(baseUrl+'/'+data._id, data);
  }

  getById(data: any): Observable<tipoAvion> {
    return this.http.get(baseUrl, { params: data });
  }
}
