import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../app.service';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  host: {
    class:'appearance'
   },
  styleUrls: ['./appearance.component.scss']
})
export class AppearanceComponent implements OnInit {

  constructor(private appService: AppService) {

  }

  ngOnInit() {

  }

  onChange(event: Event) {
    console.log("onchange");
    this.appService.onChange(event);
  }
  onChange1(event: Event) {
    console.log("onchange1");
    this.appService.onChange1(event);
  }
}
