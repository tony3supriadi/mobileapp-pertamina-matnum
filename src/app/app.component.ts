import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Loading } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { StockminPage } from '../pages/stockmin/stockmin';
import { FindmatnoPage } from '../pages/findmatno/findmatno';
import { GoodissuePage } from '../pages/goodissue/goodissue';
import { GoodreceivePage } from '../pages/goodreceive/goodreceive';

@Component({
  templateUrl: 'app.html'
})
export class App {
  loading: Loading;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, private loadingCtrl: LoadingController) {
    this.initializeApp();

    this.pages = [
      { title: 'HOME', icon: 'ios-home-outline', component: HomePage },
      { title: 'STOCK ALERT', icon: 'ios-alert-outline', component: StockminPage },
      { title: 'FIND MATERIAL', icon: 'ios-search-outline', component: FindmatnoPage },
      { title: 'GOOD RECEIVE', icon: 'ios-cloud-upload-outline', component: GoodreceivePage },
      { title: 'GOOD ISSUE', icon: 'ios-cloud-download-outline', component: GoodissuePage },
      { title: 'LOGOUT', icon: 'ios-log-out-outline', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.show();
    });
  }

  openPage(page) {
    this.showLoading();
    setTimeout(() => {
      this.loading.dismiss();
      this.nav.setRoot(page.component);
    }, 500);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
}
