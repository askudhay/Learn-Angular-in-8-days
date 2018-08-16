import { Component } from '@angular/core';
import { Student} from './Student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapEx';
  model = {'studID' : 190, 'studName' : 'Udhay', 'studDestinction': true, 'studGrade': 'A'};
  studentsArr: Array<Student>;
  addStudent() {
    const sObj = new Student(44, 'Dan', true, 'A');
    this.studentsArr.push(sObj);
  }
}
