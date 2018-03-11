import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-sidebar2nd',
  templateUrl: './sidebar2nd.component.html',
  host: {
    class:'sidebar2nd'
   },
  styleUrls: ['./sidebar2nd.component.scss']
})
export class Sidebar2ndComponent implements OnInit {
  newColor:string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.bg1.subscribe((data: string) =>{
      this.newColor = data;
      console.log(data);
    });
  }



}
