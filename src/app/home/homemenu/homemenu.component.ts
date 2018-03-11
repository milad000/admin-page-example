import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  host: {
    class:'homemenu'
   },
  styleUrls: ['./homemenu.component.scss']
})
export class HomemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
