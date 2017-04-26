import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { PiecartPage } from '../piecart/piecart';
import { FindPage } from '../find/find';
import { IssuePage } from '../issue/issue';
import { ReceivePage } from '../receive/receive';

import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  getData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public materialService: MaterialService
  ) {}

  openPage(p) {
    if (p == 'alert') {
      this.optionPage(PiecartPage);
    } else 
    if (p == 'find') {
      this.optionPage(FindPage);
    } else 
    if (p == 'receive') {
      this.optionPage(ReceivePage);
    } else
    if (p == 'issue') {
      this.optionPage(IssuePage);
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
