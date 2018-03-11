import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  host: {
    class: 'mainnav'
  },
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {
  title: string = 'works!';
  constructor(private appService: AppService) {
    this.appService.title.subscribe((data) => {
      this.title = data;
    })
  }

  ngOnInit() {
  }
}
