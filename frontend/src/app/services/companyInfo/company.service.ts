import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ICompany } from '../../models/CompanyInfo';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})  

export class CompanyService {

  public url: string = 'http://localhost:3333/companyInfo?ticker=';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applications/json',
    })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public getCompanyInfo(tickerName: string): Observable<ICompany> {
    return this.httpClient.get<ICompany>(this.url + tickerName);
  }
}
