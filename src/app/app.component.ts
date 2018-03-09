import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value='#700006';
  value1='#705506';
  footer = getComputedStyle(document.body).getPropertyValue('--violet-1');
  footer00 = getComputedStyle(document.body).getPropertyValue('--violet-00');

  constructor(){

  }

  ngOnInit(){
    this.footer = this.value;
    this.footer00 = this.value1;

  }

  onChange(event:Event){
    this.value = (<HTMLInputElement>event.target).value;
    this.footer = this.value;
  }
  onChange1(event:Event){
    this.value = (<HTMLInputElement>event.target).value;
    this.footer00 = this.value;
  }
}
