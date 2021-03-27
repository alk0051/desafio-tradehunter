import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/companyInfo/company.service';
import { ICompany } from '../../models/CompanyInfo';
import { ITicker } from 'src/app/models/TickerInfo';
import { TickerService } from 'src/app/services/tickerInfo/ticker.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ticker: string;

  companyInfo: ICompany;
  tickerInfo: ITicker;

  constructor(
    public Company: CompanyService,
    public Ticker: TickerService
  ) {}

  ngOnInit(): void {
  }

  searchCompanyAndTicker = () => {
    this.Company.getCompanyInfo(this.ticker).subscribe(data => {
      this.companyInfo = data;
      console.log(this.companyInfo);
    });

    this.Ticker.getTickerInfo(this.ticker).subscribe(data => {
      this.tickerInfo = data;
      console.log(this.tickerInfo);
    });
  }
}