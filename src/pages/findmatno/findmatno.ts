import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, NavParams } from 'ionic-angular';

import { FindmatdetailPage } from '../findmatdetail/findmatdetail';
import { Material, MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-findmatno',
  templateUrl: 'findmatno.html'
})
export class FindmatnoPage {
  showDataView = true;
  loading: Loading;
  material = { matnum: '', deskripsi: '', stok: 0, unit: '', mpn: '' };
  registerCredentials = { matnum: '' };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private matService: MaterialService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController
  ) {}

  public findShowMaterial() {
    this.showLoading();
    this.matService.find(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        setTimeout(() => {
          this.loading.dismiss();
          this.material.matnum = 'H630500118';
          this.material.deskripsi = 'SOCKOLET:PIPE,FORGED,A182,3000#,2INX1INSOCKOLET:PIPE,FORGED,A182,3000#,2INX1IN';
          this.material.stok = 4;
          this.material.unit = 'PCS';
          this.material.mpn = 'M001';

          this.showDataView = false;
        }, 2000);
      } else {
        setTimeout(() => {
          this.loading.dismiss();
          this.showMessage('MATERIAL NOT FOUND');
        }, 2000);
      }
    });
  }

  public showDetail() {
    this.navCtrl.push(FindmatdetailPage);
  }

  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  private showMessage(message: string) {
    let alert = this.alertCtrl.create({
      title: 'LOGIN FAILED',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
