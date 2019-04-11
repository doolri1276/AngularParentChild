import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  //부모 -> 자식 으로 데이터 전달
  @Input() myAnotherState;
  @Input() clonedVal;

  //자식 -> 부모 로 이벤트 보냄
  @Output() onChangeChildData = new EventEmitter<number>();

  title="Test Child";

  constructor() { }

  ngOnInit() {
  }

  changeMyData() {
    //비즈니스 로직
    const resultVal = 8712;
    this.onChangeChildData.emit(resultVal);
  }
}
