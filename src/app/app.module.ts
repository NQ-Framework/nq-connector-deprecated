import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';
import { AnimationModule } from './animation/animation.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    AnimationModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
