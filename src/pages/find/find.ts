import { Component } from '@angular/core';
import { 
  NavController, 
  AlertController, 
  LoadingController, 
  ModalController,
  Loading, 
  NavParams } from 'ionic-angular';

import { PotextPage } from '../potext/potext';
import { StockPage } from '../stock/stock';
import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {
  num: string = "";
  loading: Loading;
  showDataView = true;
  material = { 
    matnum: '', plant: '', deskripsi: '', 
    stok: 0, minimum: 0, unit: '', mpn: '' 
  };
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private matService: MaterialService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) {}

  public findShowMaterial() {
    this.showLoading();
    this.matService.find(this.num).subscribe(data => {
      if (data.status) {
        setTimeout(() => {
          this.loading.dismiss();
          this.material.matnum = data.message.matno.toUpperCase();
          this.material.deskripsi = data.message.short_desc.toUpperCase();
          this.material.plant = data.message.plant.toUpperCase();
          this.material.stok = data.message.qty_onhand;
          this.material.minimum = data.message.qty_minimum;
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

  public stockOpen() {
    this.navCtrl.push(StockPage, {
      nopek: this.material.matnum
    });
  }

  public PoText() {
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
      title: 'ALERT DATA',
      subTitle: '<small><b>MESSAGE :</b> <br /> ' + message + '</small>',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
