import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  value='#700006';
  footer = getComputedStyle(document.body).getPropertyValue('--violet-1');

  constructor(){

  }

  ngOnInit(){
    console.log(this.footer);
    this.footer = this.value;
  }

  onChange(event:Event){
    this.value = (<HTMLInputElement>event.target).value;
    this.footer = this.value;
  }
}
