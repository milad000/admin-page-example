import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    class: 'product'
  },
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private appService: AppService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.appService.onUpdateTitle('products');
  }

  onClose() {
    this.router.navigate([{ outlets: { expandmenu: null } }]);
  }

}
