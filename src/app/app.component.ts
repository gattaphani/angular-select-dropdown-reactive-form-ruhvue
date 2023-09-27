import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: any;
  attach: any;
  term: any;
  constructor(private http: HttpClient) {}
  getUser() {
    this.http
      .get('https://app.legaciestechno.com/api/get_data.php?type=openblocks')
      .subscribe((res: any) => {
        this.data = res.all_data;
        // console.log(this.data);
        this.attach = this.data.filter((ele: any) => {
          if (ele.attachment !== '') {
            return ele;
          }
          console.log(this.attach);
        });
      });
  }
}
