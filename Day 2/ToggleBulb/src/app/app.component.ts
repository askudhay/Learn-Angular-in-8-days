import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToggleBulb';
  state: Boolean = false;
  btnText: String = 'Turn On';
 imgBulb = 'assets/bulb_off.png';
  switch() {
    this.state =  !this.state; //this.state ? false : true
    this.imgBulb = this.state ? 'assets/bulb_on.png' : 'assets/bulb_off.png' ;
    this.btnText = this.state ? 'Turn Off' : 'Turn On'
  }

}
