import { Component, Input, OnInit } from '@angular/core';
import { TickerService } from '../../services/ticker.service';
import TickerInfo, { ITicker } from '../../models/TickerInfo';

@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css']
})
export class InfolistComponent implements OnInit {

  
  @Input("ticker")info: ITicker;
 //ticker: string;


  constructor(
    public Ticker: TickerService,
  ) { }

  ngOnInit(): void {
    //this.getInfo();
  }

  // getInfo() {
  //   this.Ticker.getInfoFromApi(this.ticker).subscribe(data => {
  //     this.info = data;
  //     console.log(this.info);
  //   });
  // }
}
