import { WelcomePage } from './../pages/welcome/welcome';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import { EditaboutPage } from '../pages/editabout/editabout';
import { MenuUserPage } from '../pages/menu-user/menu-user';
import { SearchWorkPage } from '../pages/search-work/search-work';
import { DetailPage } from '../pages/detail/detail';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    InfoPage,
    AboutPage,
    EditaboutPage,
    MenuUserPage,
    SearchWorkPage,
    DetailPage,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    InfoPage,
    AboutPage,
    EditaboutPage,
    MenuUserPage,
    SearchWorkPage,
    DetailPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
