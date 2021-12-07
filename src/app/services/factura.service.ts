import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { factura } from 'src/app/models/factura.model'; 

const baseUrl = 'http://localhost:4000/api/factura';

@Injectable({
  providedIn: 'root',
})
export class facturaServise {
  constructor(private http: HttpClient) {}

  getAll(): Observable<factura[]> {
    return this.http.get<factura[]>(baseUrl);
  }

  create(data: factura): Observable<factura> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getById(data: any): Observable<factura> {
    return this.http.get(baseUrl, { params: data });
  }

  get(id: any): Observable<factura> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}