import { Component } from '@angular/core';
//import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { NavController,ModalController } from 'ionic-angular';
import { ProductService } from '../../providers/product';
import { ProductDetailPage } from '../product-detail/product-detail';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts = [];
  private femaleSelected = true;
  private maleSelected = true;

  constructor(private modalController: ModalController, private productService: ProductService, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    //console.log('teest');
    this.productService.getProducts()
      .subscribe((response) => {
          this.allProducts = response;
          console.log(this.allProducts);
      });    
  }
  openFilterModal(){
    let filterStateFromMainPage = {
      femaleSelected: this.femaleSelected,
      maleSelected: this.maleSelected
    };
    let openFilterModal = this.modalController.create(FilterModalPage, filterStateFromMainPage);
    openFilterModal.onDidDismiss((filterState)=>{
      this.femaleSelected = filterState.femaleSelected;
      this.maleSelected = filterState.maleSelected;
      
      this.productService.getProducts()
        .subscribe((allProducts)=> {
          let products = allProducts;
          if (filterState.maleSelected && filterState.femaleSelected){
            this.allProducts = products;
            return;
          } else if (!filterState.maleSelected && !filterState.femaleSelected){
            this.allProducts = [];
            return;

          } else if(filterState.femaleSelected && !filterState.maleSelected){
            this.allProducts = products.filter((product)=>{
              return product.gender !== "male";
            });

          } else {
            this.allProducts = products.filter((product)=>{
              return product.gender !== "female";
            });
          }
        });
    });
    openFilterModal.present();
  }

  goToProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }

}
