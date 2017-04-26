import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Loading } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PiecartPage } from '../pages/piecart/piecart';
import { FindPage } from '../pages/find/find';
import { IssuePage } from '../pages/issue/issue';
import { ReceivePage } from '../pages/receive/receive';

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
      { title: 'STOCK ALERT', icon: 'ios-alert-outline', component: PiecartPage },
      { title: 'FIND MATERIAL', icon: 'ios-search-outline', component: FindPage },
      { title: 'GOOD RECEIVE', icon: 'ios-cloud-upload-outline', component: ReceivePage },
      { title: 'GOOD ISSUE', icon: 'ios-cloud-download-outline', component: IssuePage },
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
