import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailHomePage } from './../detail-home/detail-home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  detailHome = () => {
    this.navCtrl.push(DetailHomePage);
  }

}
