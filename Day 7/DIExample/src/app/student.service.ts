import { Injectable } from '@angular/core';
import { students } from './studentdetails';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  getStudents(){
    return students;
  }
}
