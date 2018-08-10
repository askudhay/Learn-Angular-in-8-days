import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prince',
  templateUrl: './prince.component.html',
  styleUrls: ['./prince.component.css']
})
export class PrinceComponent implements OnInit {
@Input() pName: String;
  constructor() { }

  ngOnInit() {
  }

}
