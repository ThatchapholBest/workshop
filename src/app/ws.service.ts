import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ws } from './ws';

@Injectable({
  providedIn: 'root'
})
export class WsService {

  constructor(private http: HttpClient) { }

  getMovieId(id: number): Observable<Ws[]> {
    console.log('id = ', id)
    return this.http.get<Ws[]>('https://638492184ce192ac605bc39a.mockapi.io/Movie/' + id  );
  }

}