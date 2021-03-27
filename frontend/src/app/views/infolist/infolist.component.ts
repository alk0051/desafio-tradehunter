import { Component, Input, OnInit } from '@angular/core';
import { TickerService } from '../../services/companyInfo/company.service';
import { ITicker } from '../../models/CompanyInfo';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css']
})
export class InfolistComponent implements OnInit {

  @Input("ticker")info: ITicker;

  constructor(
    public Ticker: TickerService,
  ) { }

  ngOnInit(): void {
  }
}
