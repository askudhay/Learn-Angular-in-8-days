import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BindingClassandStyles';
  bgClass: String = 'redBg';
  status: Boolean = true;
  isWarning: Boolean = false;
  btnText: String = 'Enable Warning Style';

  constructor() {
    if (this.status) {
      this.bgClass = 'greenBg cursor';
    } else {
      this.bgClass = 'redBg';
    }
  }

  enableWarningStyle() {
    this.isWarning = !this.isWarning;
    this.btnText = this.isWarning ? 'Disable Warning Style' : 'Enable Warning Style';
  }
}
