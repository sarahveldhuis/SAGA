import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';


/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {

    constructor(
        public af: AngularFireDatabase,
        public afa: AngularFireAuth
  ) {
    console.log('Hello UserserviceProvider Provider');
  }

    createAuthUser(user: { email: string, password: string }): Promise<firebase.auth.UserCredential>{

        return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

    create(user: User, uid: string) {
        return this.af.database.ref('/users/' + uid).push(user);
    }

    logIn(user: { email: string, senha: string }): Promise<firebase.auth.UserCredential>{
        return this.afa.auth.signInWithEmailAndPassword(user.email, user.senha);
    }

    logOut() {
        return this.afa.auth.signOut();
    }

}
