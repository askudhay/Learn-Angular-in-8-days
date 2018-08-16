import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() uName: String;
  @Input() fName: String;
  @Output() childData = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  emitChildData(){
    this.childData.emit('jhjhkj');
  }
}
