import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/companyInfo/company.service';
import { ITicker } from '../../models/CompanyInfo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ticker: string;

  info: ITicker;

  constructor(
    public Ticker: TickerService,
  ) {}

  ngOnInit(): void {
  }

  searchTicker = () => {
    this.Ticker.getInfoFromApi(this.ticker).subscribe(data => {
      this.info = data;
      console.log(this.info);
    });
  }

}
