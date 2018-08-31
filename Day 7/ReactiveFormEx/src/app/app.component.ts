import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FormBuilder) {

  }

  title = 'ReactiveFormEx';
  name = new FormControl('Udhay');
  studForm = new FormGroup({
    studId: new FormControl(123),
    studName: new FormControl('Udhay'),
    studDest: new FormControl(false),
    studGrade: new FormControl('B')
  });

  profileForm = this.fb.group({
    fName: ['Udhaya'],
    lName: ['Kumar']
  });
}
