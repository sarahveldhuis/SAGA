import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { RegisterPage } from './../register/register';
import { TabsPage } from './../tabs/tabs';
import { ForgetPage } from './../forget/forget';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  forgetPage = () => {
    this.navCtrl.push(ForgetPage);
  }

  homePage () {
    this.navCtrl.setRoot(TabsPage);
  }

  register = ()=>{
    this.navCtrl.push(RegisterPage)
  }

}
