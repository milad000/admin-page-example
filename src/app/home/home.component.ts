import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    class: 'home'
  },
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.onUpdateTitle('home');
  }

  onClose() {
    this.router.navigate([{ outlets: { expandmenu: null }}]);
  }

}
