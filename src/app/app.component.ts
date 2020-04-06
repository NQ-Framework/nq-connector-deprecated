import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nq-connector';

  constructor(electron: ElectronService, ) {
    if (electron.isElectronApp) {
      electron.clipboard.writeText('ovo je sad u clipboardu');
      console.log('je el app i stavih u clip');
    } else {
      console.log('nicht electron');
    }
  }
}
