import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductService } from '../../providers/product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public bestSellerProducts = [];

  constructor(public navCtrl: NavController, private productService: ProductService) {

  }

  ionViewDidLoad(){
   this.productService.getProducts()
   .subscribe((allProducts) => {
      this.bestSellerProducts = allProducts.filter(
        product => product.bestSeller == true);
        console.log(this.bestSellerProducts);
   });
  }
  

}
