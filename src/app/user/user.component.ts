import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  host: {
    class:'user'
   },
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.onUpdateTitle('users');
  }


}
