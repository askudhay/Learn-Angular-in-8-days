import { Component } from '@angular/core';
import { Student} from './Student';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapEx';
  model = {'studId' : 190, 'studName' : 'Udhay', 'studDestinction': true, 'studGrade': 'A'};
  formSubmitted = false;
  studentsArr: Array<Student> = Array<Student>();
  onSubmit() {
    const sObj = new Student(this.model.studId, this.model.studName, this.model.studDestinction, this.model.studGrade);
    this.studentsArr.push(sObj);
    this.formSubmitted = true;
  }
  submiAgain(){
    this.formSubmitted = false;
  }
}
