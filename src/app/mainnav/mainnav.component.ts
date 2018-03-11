import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  host: {
    class:'mainnav'
   },
  styleUrls: ['./mainnav.component.scss']
})
export class MainnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
