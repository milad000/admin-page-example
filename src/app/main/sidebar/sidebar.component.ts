import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: {
    class:'sidebar'
   },
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  newColor:string;
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.bg.subscribe((data: string) =>{
      this.newColor = data;
      console.log(data);
    });
  }

}
