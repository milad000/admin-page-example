import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";


@Injectable()
export class AppService {
  loginStatus = new EventEmitter<any>();
  uttaggAllQueries = new EventEmitter<any>();

  constructor(private http: HttpClient,
    private router: Router) { }

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



}
