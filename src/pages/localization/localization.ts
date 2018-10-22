import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { DetailPage } from './../detail/detail';

/**
 * Generated class for the LocalizationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-localization',
  templateUrl: 'localization.html',
})
export class LocalizationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  detail= () =>{
    this.navCtrl.push(DetailPage);
  }

  showAlert =() => {
    const alert = this.alertCtrl.create({
      title: 'Compartilhar Localização?',
      buttons: [
        {
          text: 'NÃO',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'SIM',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ],
      enableBackdropDismiss: false
    });
    alert.present();
  }

}
