import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, } from 'ionic-angular';

import { FindmatdetailPage } from '../findmatdetail/findmatdetail';
import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-goodissue',
  templateUrl: 'goodissue.html'
})
export class GoodissuePage {
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

  public submit() {
    let alert = this.alertCtrl.create({
      title: 'SUBMIT DATA',
      subTitle: 'Are You Sure?',
      buttons: ['YES', 'CANCEL']
    });
    alert.present(prompt);
  }

  public showDetail() {
    this.navCtrl.push(FindmatdetailPage, {
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
