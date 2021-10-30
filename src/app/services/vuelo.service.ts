import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { vuelo } from '../models/vuelo.model';

const baseUrl = 'http://localhost:4000/api';

@Injectable({
  providedIn: 'root',
})
export class vueloServise {
  constructor(private http: HttpClient) {}

  create(data: vuelo): Observable<vuelo> {
    return this.http.post(baseUrl+"/vuelo", data);
  }

}