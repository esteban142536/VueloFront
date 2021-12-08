import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tiquete } from '../models/tiquete.model';

const baseUrl = 'http://localhost:4000/api/tiquete';

@Injectable({
  providedIn: 'root',
})
export class TiqueteService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<tiquete[]> {
    return this.http.get<tiquete[]>(baseUrl);
  }

  create(data: tiquete): Observable<tiquete> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  getById(data: any): Observable<tiquete> {
    return this.http.get(baseUrl, { params: data });
  }

  get(id: any): Observable<tiquete> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
