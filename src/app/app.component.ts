import { Component, ElementRef, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  elemementRef: ElementRef;

  //탐색 결과에 부합하는 첫번째 결과를 바인딩
  @ViewChild('myInput') myInput: ElementRef;
  //템플릿에 동일한 이름으로 선언한 템플릿 참조변수를 모두 바인딩하여 담는다.
  @ViewChildren('myInput') myInputs: QueryList<ElementRef>;

  constructor(ef: ElementRef){
    this.elemementRef = ef;
  }

  ngAfterViewInit(){

  }
}
