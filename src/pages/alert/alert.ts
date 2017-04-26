import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

import { MaterialService } from '../../providers/material-service';
import { PotextPage } from '../potext/potext';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {
  loading: Loading;
  getDataMaterial: any;
  searchMaterial: string = "";
  title: string = this.navParams.get("title");

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public _matService: MaterialService
  ) {}

  ionViewDidLoad() {
    this.showingMaterial();
  }

  showingMaterial() {
    this._matService.show(this.title)
      .subscribe(
        data => {
          if (data.status) {
            this.getDataMaterial = data.message.filter((item) => {
              return item.matno.toLowerCase().indexOf(this.searchMaterial.toLowerCase()) > -1;
            });
          } else {
            this.showError(data.message);
          }
        },
      );
  }

  showMaterial(num:any) {
    this.navCtrl.push(PotextPage, {
      nopek: num
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private showError(message: string) {
    let alert = this.alertCtrl.create({
      title: 'ALERT DATA',
      subTitle: '<small><b>MESSAGE :</b> <br /> ' + message + '</small>',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
