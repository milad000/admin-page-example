import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  host: {
    class: 'user'
  },
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private appService: AppService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.onUpdateTitle('users');
  }

  onClose() {
    this.router.navigate([{ outlets: { expandmenu: null } }]);
  }

}