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

  create(data: vuelo): Observable<vuelo> {
    return this.http.post(baseUrl, data);
  }

  update(data: vuelo): Observable<vuelo> {
    return this.http.put(baseUrl+'/'+data._id, data);
  }

  getById(data: any): Observable<vuelo> {
    return this.http.get(baseUrl, { params: data });
  }

}