import { DetailHomePage } from './../pages/detail-home/detail-home';
import { ForgetPage } from './../pages/forget/forget';
import { LocalizationPage } from './../pages/localization/localization';
import { SettingsPage } from './../pages/settings/settings';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FirebaseApp, AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseAppConfig } from '@angular/fire'

import { SignupPage } from '../pages/signup/signup';
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
import { UserserviceProvider } from '../providers/userservice/userservice';

const firebaseAppConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyCUOVdKWloJO2WFc7siLCRs9VIAuh_F7Ac",
    authDomain: "saga3d-f06a4.firebaseapp.com",
    databaseURL: "https://saga3d-f06a4.firebaseio.com",
    projectId: "saga3d-f06a4",
    storageBucket: "saga3d-f06a4.appspot.com",
    messagingSenderId: "479353683785"
}

@NgModule({
  declarations: [
  	SignupPage,
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
        AngularFireModule.initializeApp(firebaseAppConfig)
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
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider,
    FirebaseApp,
    AngularFireAuth,
    AngularFireDatabase
  ]
})
export class AppModule {}
