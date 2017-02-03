import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { StockminPage } from '../stockmin/stockmin';
import { FindmatnoPage } from '../findmatno/findmatno';
import { GoodissuePage } from '../goodissue/goodissue';
import { GoodreceivePage } from '../goodreceive/goodreceive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController
  ) {}

  openPage(p) {
    if (p == 'alert') {
      this.optionPage(StockminPage);
    } else 
    if (p == 'find') {
      this.optionPage(FindmatnoPage);
    } else 
    if (p == 'receive') {
      this.optionPage(GoodreceivePage);
    } else
    if (p == 'issue') {
      this.optionPage(GoodissuePage);
    }
  }

  optionPage(p) {
    this.showLoading();
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot(p);
    }, 500);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
}
