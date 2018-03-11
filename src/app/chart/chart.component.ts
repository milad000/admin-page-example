import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  host: {
    class:'chart'
   },
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.onUpdateTitle('charts');
  }

}
