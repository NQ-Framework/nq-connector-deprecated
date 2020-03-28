import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxElectronModule } from 'ngx-electron';
import { AnimationModule } from './animation/animation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
    AnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
