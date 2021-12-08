import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vuelo } from '../models/vuelo.model';

const baseUrl = 'http://localhost:4000/api/vuelo';

@Injectable({
  providedIn: 'root',
})
export class vueloServise {
  constructor(private http: HttpClient) {}

  getAll(): Observable<vuelo[]> {
    return this.http.get<vuelo[]>(baseUrl);
  }

  create(data: vuelo): Observable<vuelo> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getById(data: any): Observable<vuelo> {
    return this.http.get(baseUrl, { params: data });
  }

  get(id: any): Observable<vuelo> {
    return this.http.get(`${baseUrl}/${id}`);
  }

}