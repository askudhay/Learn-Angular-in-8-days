import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Assignment';
  state: Boolean = false;
  bulbImg: String = 'assets/bulb_off.png';
  switch(currState: Boolean) {
    this.state = currState;
    this.bulbImg = this.state ? 'assets/bulb_on.png' : 'assets/bulb_off.png';
  }

}
