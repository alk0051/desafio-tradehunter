import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import ITicker from '../models/TickerInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  

export class TickerService {

  public url: string = "http://localhost:3333/tickerDetails";


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applications/json',
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getInfo(): Observable<ITicker> {
    return this.httpClient.get<ITicker>(this.url);
  }
}
