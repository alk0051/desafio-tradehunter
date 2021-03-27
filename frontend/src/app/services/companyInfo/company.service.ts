import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {ITicker} from '../../models/CompanyInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})  

export class TickerService {

  public url: string = `http://localhost:3333/companyInfo?ticker=`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applications/json',
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getInfoFromApi(tickerName: string): Observable<ITicker> {
    return this.httpClient.get<ITicker>(this.url + tickerName);
  }
}
