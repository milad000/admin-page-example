import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class AppService {
  loginStatus = new EventEmitter<any>();
  uttaggAllQueries = new EventEmitter<any>();
  bg = new EventEmitter<any>();
  bg1 = new EventEmitter<any>();
  value='#700006';
  value1='#705506';
  footer = getComputedStyle(document.body).getPropertyValue('--violet-1');
  footer00 = getComputedStyle(document.body).getPropertyValue('--violet-00');

  constructor(private http: HttpClient,
    private router: Router) { 
      this.footer = this.value;
      this.footer00 = this.value1;
    }

  onRefresh() {
    setTimeout(() => {
      this.http
        .get("http://..........")
        .subscribe((data) => {
          this.uttaggAllQueries.emit(data);
          console.log(data);
        });
    }, 100);
  }

  onChange(event:Event){
    console.log("onchange");
    this.value = (<HTMLInputElement>event.target).value;
    this.footer = this.value;
    this.bg.emit(this.footer);
  }
  onChange1(event:Event){
    console.log("onchange1");
    this.value = (<HTMLInputElement>event.target).value;
    this.footer00 = this.value;
    this.bg1.emit(this.footer00);
  }

}
