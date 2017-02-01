import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { PasswordPage } from '../password/password';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  loading: Loading;
  registerCredentials = {nopek: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

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
        });
      } else {
        this.showError("Nopek or Password is wrong!!");
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
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'LOGIN FAILED',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
