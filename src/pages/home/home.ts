import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { NavController } from 'ionic-angular';
import { ProductService } from '../../providers/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];

  constructor(private productService: ProductService, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.productService.getProducts()
      .subscribe((response) => {
          this.allProducts = response;
      });    
  }

}
