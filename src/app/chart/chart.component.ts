import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../app.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  host: {
    class: 'chart'
  },
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor(private appService: AppService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.onUpdateTitle('chart');
  }

  onClose() {
    this.router.navigate([{ outlets: { expandmenu: null }}]);
  }

}