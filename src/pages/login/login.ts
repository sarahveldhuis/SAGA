import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserserviceProvider } from '../../providers/userservice/userservice';

import { SignupPage } from './../signup/signup';
import { TabsPage } from './../tabs/tabs';
import { ForgetPage } from './../forget/forget';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    loginForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public formBuilder: FormBuilder,
        public navParams: NavParams,
        public userService: UserserviceProvider)
    {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.minLength(3)]],
            senha: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  forgetPage(){
    this.navCtrl.push(ForgetPage);
  }

    onLogIn() {
        console.log(this.loginForm.value);
        this.userService.logIn(this.loginForm.value).then(() => {
            this.navCtrl.setRoot(TabsPage);
        }).catch((error) => {
            console.log("error:" + error.toString());
        })
        
  }

  toSignup(){
    this.navCtrl.push(SignupPage)
  }

}
