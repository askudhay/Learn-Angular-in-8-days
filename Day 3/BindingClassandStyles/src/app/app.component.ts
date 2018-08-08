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
  constructor() {
    if(this.status) {
      this.bgClass = 'greenBg cursor';
    } else {
      this.bgClass = 'redBg';
    }
  }
}
