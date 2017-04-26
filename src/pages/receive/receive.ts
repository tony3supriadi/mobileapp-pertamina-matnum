import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, } from 'ionic-angular';

import { PotextPage } from '../potext/potext';
import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html'
})
export class ReceivePage {
  showDataView = true;
  loading: Loading;
  material = { matnum: '', deskripsi: '', stok: 0, unit: '', mpn: '' };
  matnum: string = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private matService: MaterialService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  ) {}

  findShowMaterial() {
    this.showLoading();
    this.matService.find(this.matnum)
      .subscribe(data => {
        if (data.status) {
          setTimeout(() => {
            this.loading.dismiss();
            this.material.matnum = data.message.matno.toUpperCase();
            this.material.deskripsi = data.message.short_desc.toUpperCase();
            this.material.stok = data.message.qty_onhand;
            this.material.unit = data.message.uan.toUpperCase();
            this.material.mpn = data.message.mpn.toUpperCase();

            this.showDataView = false;
          }, 2000);
        } else {
          setTimeout(() => {
            this.loading.dismiss();
            this.showMessage(data.message);
          }, 2000);
        }
      });

  }

  public submit() {
    let alert = this.alertCtrl.create({
      title: 'SUBMIT DATA',
      subTitle: 'Are You Sure?',
      buttons: ['YES', 'CANCEL']
    });
    alert.present(prompt);
  }

  public showDetail() {
    this.navCtrl.push(PotextPage, {
      nopek: this.material.matnum
    });
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private showMessage(message: string) {
    let alert = this.alertCtrl.create({
      title: 'FAILED DATA',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
