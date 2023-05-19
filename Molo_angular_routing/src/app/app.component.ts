import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ECommerce } from './models/ecommerce.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Molo_angular_routing';
  data:ECommerce;
  oEcommerce:Observable<ECommerce>
  url="https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db";

  constructor(public http:HttpClient){
    this.oEcommerce=http.get<ECommerce>(this.url);
    this.oEcommerce.subscribe(d=>this.data = d);
  }
}
