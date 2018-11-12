import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice'
import { LoginPage } from '../login/login';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    }

    onLogout() {
        this.userService.logOut();
        this.navCtrl.setRoot(LoginPage);
    }

}
