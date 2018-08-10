import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgDirective';
  isServiceUnavailable: Boolean = false;
  plInventors = ['Dennis Ritchie', 'Bjarne stroustrup', 'James_Gosling'];
  students = [{ 'sId': 345, 'sName': 'Kumar', 'sDistinction': false }, { 'sId': 123, 'sName': 'Udhay', 'sDistinction': false }, {
    'sId': 567, 'sName': 'John', 'sDistinction' : true
  }, {'sId': 789, 'sName': 'Kelvis', 'sDistinction' : false}];

  studentsArr: Array<Student> = [new Student(123, 'Udhay', true, 'A'),
            new Student(234, 'Kumar', false, 'C')];

  addStudent() {
    const sObj = new Student(44, 'Dan', true, 'A');
    this.studentsArr.push(new Student(1, 'Vinod', false, 'D'));
    this.studentsArr.push(sObj);
  }
}
