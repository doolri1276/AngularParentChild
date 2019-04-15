import { Component, OnInit, ViewChild } from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {
  @ViewChild(TestChildComponent) textChild: TestChildComponent;
  title="test parent"

  myState = "great!";
  uniqueVal = "OMG";

  receivedValue;

  constructor() { }

  ngOnInit() {
  }

  receivedData(resultVal){
    this.receivedValue=resultVal;
  }

}
