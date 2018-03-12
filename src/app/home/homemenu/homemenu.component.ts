import { Component, OnInit } from '@angular/core';


//SERVICES
import { AppService } from '../../app.service';

//MODELS
import { Deals } from '../../shared/deals.model';
import { Tables } from '../../shared/tables.model';

@Component({
  selector: 'app-homemenu',
  templateUrl: './homemenu.component.html',
  host: {
    class: 'homemenu'
  },
  styleUrls: ['./homemenu.component.scss']
})
export class HomemenuComponent implements OnInit {
  rowNumber: number[];
  rows:number[]=[1,2];
  deals: Deals[] = [
    new Deals('product1', 2, '/pic/product1'),
    new Deals('product2', 1, '/pic/product2'),
    new Deals('product3', 3, '/pic/product3'),
    new Deals('product4', 4, '/pic/product4'),
    new Deals('product5', 2, '/pic/product5'),
    new Deals('product6', 1, '/pic/product6'),
    new Deals('product7', 3, '/pic/product7'),
    new Deals('product8', 4, '/pic/product8'),
  ];
  tables: Tables[] = [
    new Tables('product1', 'green',42,'unisex, freesize','./pic/product1'),
    new Tables('product2', 'blue',39,'unisex, freesize','./pic/product2'),
  ]

  constructor(private appService: AppService) {
    this.rowNumber = [];
    for (let i = 0; i < this.deals.length / 2; i++) {
      this.rowNumber.push(i);
    }
  }

  ngOnInit() {
    this.appService.onUpdateTitle('home');
  }

  getCurrentDeals(currentIndex) {
    let item = [];
    let firstIndex = currentIndex * 2;
    for (let i = 0; i < 2; i++) {
      let nextIndex = firstIndex + i;
      if (this.deals[nextIndex]) {
        item.push(this.deals[nextIndex]);
      }
    }
    return item;
  }
}
