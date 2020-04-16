import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(
    private client: HttpClient,
    private config: ConfigService,
    private auth: AngularFireAuth,
  ) {}
  testPing() {
    this.client.post(this.config.apiUrl + '/actions/ping', {}).subscribe({
      next: (res) => {
        console.log('stigao ', res);
      },
      error: (er) => {
        console.log('err ping', er);
      },
    });
  }
  terminateConnector() {
    this.client.post(this.config.apiUrl + '/actions/terminate', {}).subscribe({
      next: (res) => {
        console.log('stig ', res);
      },
      error: (er) => {
        console.log('err terminate', er);
      },
    });
  }

  testConnector() {
    this.auth.authState
      .pipe(
        first(),
        flatMap((u) => u.getIdToken()),
      )
      .subscribe((token) => {
        const evSource = new EventSource(
          `${this.config.apiUrl}/actions/recieve?token=${token}`,
          { withCredentials: true },
        );
        evSource.onmessage = (msg) => {
          console.log('got msg! ', msg);
        };
      });
  }
}
