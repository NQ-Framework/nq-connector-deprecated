import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

// ToDo: this whole class is a temporary first pass implementation
/* istanbul ignore file */
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  email = '';
  password = '';

  constructor(public firebaseAuth: AngularFireAuth) {}

  ngOnInit(): void {}

  async loginUP() {
    try {
      const user = await this.firebaseAuth.signInWithEmailAndPassword(
        'milos.s.pfc@gmail.com',
        'Test1234!!',
      );
      if (user && user.user && user.user.emailVerified) {
        console.log('user', user);
        return;
      }
      alert('you have not verified your email address!');
      user.user.sendEmailVerification();
    } catch (err) {
      alert('error logging you in...' + err.message);
      console.error(err);
    }
  }
  login() {
    this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  linkGoogle(user: firebase.User) {
    user.linkWithPopup(new auth.GoogleAuthProvider()).then(() => {});
  }
  logout() {
    this.firebaseAuth.signOut();
  }
  signUp() {
    console.log('signing you up', this.email, this.password);
    const p = this.firebaseAuth.createUserWithEmailAndPassword(
      this.email,
      this.password,
    );
    p.then((u) => {
      console.log('got back: ', u);
      u.user.sendEmailVerification();
    }).catch((e) => {
      console.error(e);
    });
  }
  hasProvider(user: firebase.User, provider: string): boolean {
    return !!user.providerData.find((p) => p.providerId === provider);
  }
}
