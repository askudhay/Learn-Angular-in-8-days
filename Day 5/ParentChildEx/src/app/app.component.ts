import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'ParentChildEx';
  studentsArr: Array<Student> = [new Student(123, 'Udhay', true, 'A'),
  new Student(234, 'Kumar', false, 'C')];

  onReturn(str: String) {
    this.title = str;
  }
}
