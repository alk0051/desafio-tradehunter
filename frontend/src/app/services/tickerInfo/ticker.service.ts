import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITicker } from '../../models/TickerInfo';
import { empty, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  public url: string = 'http://localhost:3333/tickerInfo?ticker=';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'applications/json',
    })
  };

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getTickerInfo(tickerName: string): Observable<ITicker> {
    return this.httpClient.get<ITicker>(this.url + tickerName)
    .pipe(
      catchError(error => {
        console.log(error);
        alert("Ticker não encontrado!");

        return empty();
      })
    );
  }

}
