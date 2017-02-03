import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Findmatdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-findmatdetail',
  templateUrl: 'findmatdetail.html'
})
export class FindmatdetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public nopek = this.navParams.get("nopek");

}
