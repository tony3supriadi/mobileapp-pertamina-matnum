import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';

import { StockService } from '../../providers/stock-service';
import { MaterialService } from '../../providers/material-service';
import { Stock } from '../../model/stock-model';

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {
  loading: Loading;
  nopek: string = this.navParams.get("nopek");
  onHand: number;
  uan: string;
  stocks: Stock[];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public _stockService: StockService,
    public _materialService: MaterialService
  ) {}

  ionViewDidLoad() {
    this.loadStocks();
    this.loadMaterials();
  }

  loadStocks() {
    this._stockService.getStock(this.nopek)
            .subscribe(
                data => {
                  if (data.status) {
                    this.stocks = data.message
                  } else {
                    this.showError(data.message);
                  }
                });
  }

  loadMaterials() {
    this._materialService.find(this.nopek)
      .subscribe(
        data => {
          if (data.status) {
            this.onHand = data.message.qty_onhand;
            this.uan = data.message.uan;
          } else {
            this.showError(data.message);
          }
        }
      );
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
