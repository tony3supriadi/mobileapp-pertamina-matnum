import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, NavParams } from 'ionic-angular';

import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-potext',
  templateUrl: 'potext.html'
})
export class PotextPage {
  nopek: string = this.navParams.get("nopek");
  poText: string;
  loading: Loading;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public _material: MaterialService,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    this.showLoading();

    this._material.find(this.nopek)
      .subscribe(
        data => {
          if (data.status) {
            setTimeout(() => {
              this.loading.dismiss();
              this.poText = data.message.po_text;
            }, 1000);
          } else {
            setTimeout(() => {
              this.loading.dismiss();
              this.showMessage(data.message);
            }, 1000);
          }
        });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }


  showMessage(message: string) {
    let alert = this.alertCtrl.create({
      title: 'ALERT DATA',
      subTitle: '<small><b>MESSAGE :</b> <br /> ' + message + '</small>',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
