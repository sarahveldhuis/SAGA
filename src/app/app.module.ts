import { DetailHomePage } from './../pages/detail-home/detail-home';
import { ForgetPage } from './../pages/forget/forget';
import { LocalizationPage } from './../pages/localization/localization';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritePage } from './../pages/favorite/favorite';
import { DetailPage } from './../pages/detail/detail';
import { Detail2Page } from './../pages/detail2/detail2';
import { BeginningPage } from './../pages/beginning/beginning';
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage, 
    FavoritePage,
    SettingsPage,
    LocalizationPage,
    DetailPage,
    Detail2Page,
    BeginningPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    DetailHomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FavoritePage,
    SettingsPage, 
    LocalizationPage,
    DetailPage,
    Detail2Page,
    BeginningPage,
    LoginPage,
    RegisterPage,
    ForgetPage,
    DetailHomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
