import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from '../../services/companyInfo/company.service';
import { ICompany } from '../../models/CompanyInfo';
import { TickerService } from 'src/app/services/tickerInfo/ticker.service';
import { ITicker } from 'src/app/models/TickerInfo';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css']
})
export class InfolistComponent implements OnInit {

  @Input("company")companyInfo: ICompany;
  @Input("ticker")tickerInfo: ITicker;

  constructor(
    public Company: CompanyService,
    public Ticker: TickerService
  ) { }

  ngOnInit(): void {
  }
}
