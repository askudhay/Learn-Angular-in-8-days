import { Component } from '@angular/core';
import { LoggerService } from './logger.service';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIExample';
  stdArr: any;
  constructor(private logSrvc: LoggerService, private studsrvc: StudentService){
    logSrvc.logInfo('Constructor is running...');
    this.stdArr = this.studsrvc.getStudents();
  }

  sayhello(){
    this.logSrvc.logInfo('SayHello - Starts');
    this.title = this.title === 'DIExample' ? 'Hello' : 'DIExample';
    this.logSrvc.logInfo('SayHello - Ends');
  }
  
}
