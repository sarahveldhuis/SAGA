import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play',
  templateUrl: 'play.html',
})
export class PlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayPage');
    window['VrView'].showPhoto("https://storage.googleapis.com/vrview/examples/coral.jpg", {inputType: "TYPE_STEREO_OVER_UNDER", startDisplayMode: "DISPLAY_MODE_FULLSCREEN"} ); 
  }

}
