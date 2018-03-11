import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    class:'product'
   },
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.appService.onUpdateTitle('products');
  }

}
