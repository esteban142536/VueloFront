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

  create(data: tiquete): Observable<tiquete> {
    return this.http.post(baseUrl, data);
  }

  update(data: tiquete): Observable<tiquete> {
    return this.http.put(baseUrl + '/' + data._id, data);
  }

  getById(data: any): Observable<tiquete> {
    return this.http.get(baseUrl, { params: data });
  }
}
