import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserserviceProvider } from '../../providers/userservice/userservice';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	signupForm: FormGroup;
    uid: string;
    user = { nome: "", email: "" };

    constructor(
  	    public formBuilder: FormBuilder,
	    public navCtrl: NavController,
        public navParams: NavParams,
        public userService: UserserviceProvider
    ) {
  	    this.signupForm = this.formBuilder.group({
  	        nome: ['', [Validators.required, Validators.minLength(3)]],
  	        email: ['', [Validators.required, Validators.minLength(3)]],
  		    senha: ['', [Validators.required, Validators.minLength(6)]],
  		    csenha: ['', [Validators.required, Validators.minLength(6)]]
  	    });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }

    onSubmit() {
        console.log(this.signupForm.value.email);
        this.user.email = this.signupForm.value.email;
        this.user.nome = this.signupForm.value.nome;
        var authcred = {email: "", password: ""};
        authcred.email = this.signupForm.value.email;
        authcred.password = this.signupForm.value.senha;
        console.log("foi");
        this.userService.createAuthUser(authcred).then((credentials) => {
            this.uid = credentials.user.uid;
            this.userService.create(this.user, this.uid);
        }).catch((error) => {
            console.log(error.toString());
        })
    }

}
