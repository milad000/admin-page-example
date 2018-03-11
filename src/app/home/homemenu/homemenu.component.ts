import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  host: {
    class:'homemenu'
   },
  styleUrls: ['./homemenu.component.scss']
})
export class HomemenuComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.onUpdateTitle('home');
  }

}
