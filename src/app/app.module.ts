import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import "chart.js/src/chart";

import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { AlertPage } from '../pages/alert/alert';
import { PiecartPage } from '../pages/piecart/piecart';
import { FindPage } from '../pages/find/find';
import { StockPage } from '../pages/stock/stock';
import { PotextPage } from '../pages/potext/potext';
import { IssuePage } from '../pages/issue/issue';
import { ReceivePage } from '../pages/receive/receive';

import { AuthService } from '../providers/auth-service';
import { MaterialService } from '../providers/material-service';
import { StockService } from '../providers/stock-service';
import { BaseUrl } from '../providers/base-url';

@NgModule({
  declarations: [
    App,
    HomePage,
    LoginPage,
    PasswordPage,
    AlertPage,
    PiecartPage,
    FindPage,
    StockPage,
    PotextPage,
    IssuePage,
    ReceivePage
  ],
  imports: [
    ChartsModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    LoginPage,
    PasswordPage,
    AlertPage,
    PiecartPage,
    FindPage,
    StockPage,
    PotextPage,
    IssuePage,
    ReceivePage
  ],
  providers: [
    AuthService, 
    MaterialService,
    BaseUrl,
    StockService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
