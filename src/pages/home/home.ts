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

  playVideo(){
    window['VrView'].playVideo("https://d2v9y0dukr6mq2.cloudfront.net/video/preview/GTYSdDW/360-video-of-beach-and-pier_H5e_Jtfa__WM.mp4", { inputType: "TYPE_MONO", inputFormat: "FORMAT_DEFAULT", startDisplayMode: "DISPLAY_MODE_FULLSCREEN" });
  }

  showImage(){
    window['VrView'].showPhoto("https://lh3.googleusercontent.com/Zk-Wi1j0ulcU5VKLSxOS6EOXrNO0-EcTb8fZ1OtgAns8_sPG8lM85ksNyE5pnk5jm0XwNIBTS-I=h760-nu-sg", { inputType: "TYPE_MONO", startDisplayMode: "DISPLAY_MODE_FULLSCREEN" } );
  }

  showImageDois(){
    window['VrView'].showPhoto("https://lh3.googleusercontent.com/Z9AiarW--KNOVvc7eYt7UIx_Pm6hmFUf9bzpBPw941DI2zOqD4dU_SnX_XZnwmMC6j06vTiVf4g=h760-nu-sg", { inputType: "TYPE_MONO", startDisplayMode: "DISPLAY_MODE_FULLSCREEN" } );
  }



}
