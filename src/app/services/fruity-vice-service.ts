import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Fruit} from '../models/Fruit';

@Injectable({
  providedIn: 'root'
})
export class FruityViceService {


  constructor(private http: HttpClient) { }

  getAllFruits(): Observable<Fruit[]> {
    return this.http.get('/fruit/all').pipe(map(response => {
      if (response instanceof Array) {
        return response.map(jsonItem => Object.assign(new Fruit(), jsonItem))
      }
      return null;
    }));
  }
}
