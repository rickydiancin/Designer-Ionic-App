import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { NavController } from 'ionic-angular';
import { ProductService } from '../../providers/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];

  constructor(private productService: ProductService, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    //console.log('teest');
    this.productService.getProducts()
      .subscribe((response) => {
          this.allProducts = response;
          console.log(this.allProducts);
      });    
  }

  goToProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }

}
