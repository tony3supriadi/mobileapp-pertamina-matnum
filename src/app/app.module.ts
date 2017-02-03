import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { StockminPage } from '../pages/stockmin/stockmin';
import { FindmatnoPage } from '../pages/findmatno/findmatno';
import { FindmatdetailPage } from '../pages/findmatdetail/findmatdetail';
import { GoodissuePage } from '../pages/goodissue/goodissue';
import { GoodreceivePage } from '../pages/goodreceive/goodreceive';

import { AuthService } from '../providers/auth-service';
import { MaterialService } from '../providers/material-service';

@NgModule({
  declarations: [
    App,
    HomePage,
    LoginPage,
    PasswordPage,
    StockminPage,
    FindmatnoPage,
    FindmatdetailPage,
    GoodissuePage,
    GoodreceivePage
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    LoginPage,
    PasswordPage,
    StockminPage,
    FindmatnoPage,
    FindmatdetailPage,
    GoodissuePage,
    GoodreceivePage
  ],
  providers: [
    AuthService, 
    MaterialService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
