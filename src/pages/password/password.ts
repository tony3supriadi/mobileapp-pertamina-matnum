import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  public backToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
