import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  studentArray;
  constructor(private route: ActivatedRoute, private http: HttpClient, private fb: FormBuilder) {
    this.route.params.subscribe( params => console.log(params));
  }
  studForm = new FormGroup({
    studId: new FormControl(123),
    studName: new FormControl('Udhay'),
    distinction: new FormControl(false)
  });

  ngOnInit() {
    this.http.get('http://localhost:8080/student/').subscribe(
      res => {
        this.studentArray = res;
        console.log(res);
      }
    );
  }

 postData() {
  this.http.post('http://localhost:8080/student/', this.studForm.value).subscribe(data => {
    console.log(data);
  },
  err => {
    console.log('Eror', err);
  }
 );
 }

}
