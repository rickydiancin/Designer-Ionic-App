import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FilterModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html'
})
export class FilterModalPage {

  constructor( public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  closeModal(){
    this.navCtrl.pop();
  }

}
