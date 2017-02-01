import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { StockminPage } from '../pages/stockmin/stockmin';

import { AuthService } from '../providers/auth-service';

@NgModule({
  declarations: [
    App,
    HomePage,
    LoginPage,
    PasswordPage,
    StockminPage
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
    StockminPage
  ],
  providers: [AuthService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
