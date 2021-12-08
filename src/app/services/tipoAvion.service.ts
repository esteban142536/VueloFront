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

  getAll(): Observable<tipoAvion[]> {
    return this.http.get<tipoAvion[]>(baseUrl);
  }

  create(data: tipoAvion): Observable<tipoAvion> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getById(data: any): Observable<tipoAvion> {
    return this.http.get(baseUrl, { params: data });
  }

  get(id: any): Observable<tipoAvion> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}
