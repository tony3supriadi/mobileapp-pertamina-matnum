import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

import { AlertPage } from '../alert/alert';
import { MaterialService } from '../../providers/material-service';

@Component({
  selector: 'page-piecart',
  templateUrl: 'piecart.html'
})
export class PiecartPage {
  loading: Loading;
  secureLength: any = 0;
  dangerLength: any = 0;
  warningLength: any = 0;

  public pieChartType:string = 'pie';
  public pieChartOptions:any = {
    responsive: true
  };
  public pieChartLegend:boolean = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    public _matService: MaterialService
  ) {
    this._matService.show('SECURE')
      .subscribe(data => {
          this.secureLength = data.message.length;
        });

    this._matService.show('DANGER')
      .subscribe(data => {
          this.dangerLength = data.message.length;
        });

    this._matService.show('WARNING')
      .subscribe(data => {
          this.warningLength = data.message.length;
        });
  }
 
  public chartClicked(e:any):void {
    if (e.active[0]) {
      this.showLoading();
      setTimeout(() => {
        this.loading.dismiss();
        if (e.active[0]._index == 0) {
          this.navCtrl.push(AlertPage, {
            title: 'DANGER'
          }); 
        } else if (e.active[0]._index == 1) {
          this.navCtrl.push(AlertPage, {
            title: 'SECURE'
          }); 
        } else if (e.active[0]._index == 2) {
          this.navCtrl.push(AlertPage, {
            title: 'WARNING'
          }); 
        }
      }, 500);
    }
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

}
