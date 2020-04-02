import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nq-connector';
  email = '';
  password = '';

  constructor(electron: ElectronService, public firebaseAuth: AngularFireAuth) {
    if (electron.isElectronApp) {
      electron.clipboard.writeText('ovo je sad u clipboardu');
      console.log('je el app i stavih u clip');
    } else {
      console.log('nicht electron');
    }
  }

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
