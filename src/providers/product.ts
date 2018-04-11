import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the ProductService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductService {

  constructor(public http: Http) {
    console.log('Hello ProductService Provider');
  }

  getProducts(){
    return this.http.get('/assets/data.json')
      .map(response => response.json());
  }

}
