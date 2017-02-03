import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
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
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FindmatnoPage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'HOME', icon: 'ios-home-outline', component: HomePage },
      { title: 'STOCK ALERT', icon: 'ios-alert-outline', component: StockminPage },
      { title: 'FIND MATERIAL', icon: 'ios-search-outline', component: FindmatnoPage },
      { title: 'GOOD RECEIVE', icon: 'ios-cloud-download-outline', component: GoodreceivePage },
      { title: 'GOOD ISSUE', icon: 'ios-cloud-upload-outline', component: GoodissuePage },
      { title: 'GOOD ISSUE', icon: 'ios-log-out-outline', component: LoginPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
