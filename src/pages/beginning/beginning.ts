import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the BeginningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beginning',
  templateUrl: 'beginning.html',
})
export class BeginningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    setTimeout(() => {
        // this.navCtrl.popToRoot();
        // might try this instead
        this.navCtrl.setRoot(LoginPage);
    }, 1000);
}

}
