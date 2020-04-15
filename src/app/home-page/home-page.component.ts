import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private client: HttpClient, private config: ConfigService) {}
  testApi() {
    this.client.get(this.config.apiUrl + '/profile').subscribe({
      next: (res) => {
        console.log('stigao ', res);
      },
      error: (er) => {
        console.log('err', er);
      },
    });
  }
}
