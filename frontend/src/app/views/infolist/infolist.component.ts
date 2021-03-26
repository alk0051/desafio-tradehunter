import { Component, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';
import TickerInfo from '../../models/TickerInfo';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css']
})
export class InfolistComponent implements OnInit {

  info: TickerInfo

  constructor(
    public Ticker: TickerService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.Ticker.getInfo().subscribe(data => {
      this.info = data;
      console.log(this.info);
    });
  }
}
