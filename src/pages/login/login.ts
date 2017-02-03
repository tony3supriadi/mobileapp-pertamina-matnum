import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';

import { PasswordPage } from '../password/password';
import { HomePage } from '../home/home';

import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  loading: Loading;
  registerCredentials = {nopek: '', password: ''};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  ) {}

  public createAccount() {
    this.navCtrl.push(PasswordPage);
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }, 2000);
      } else {
        setTimeout(() => {
          this.loading.dismiss();
          this.showError("Nopek or Password is wrong!!");
        }, 2000);
      }
    });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private showError(message: string) {
    let alert = this.alertCtrl.create({
      title: 'LOGIN FAILED',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
