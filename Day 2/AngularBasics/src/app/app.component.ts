import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics';
  myName: String = 'ABC';
  username1: String = 'Username';
  username2: String = 'Username';
  username3: String = 'Username';
  username4: String = 'Username';
  username5: String = 'Username';

  strIntpltn() {
    return 'Hey I am passed from a method';
  }
  handleInput(event) {
    console.log(event);
    this.username2 = event.target.value;
  }

  handleNgInput(str: String) {
    this.username4 = str;
  }
}
