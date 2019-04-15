import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elemementRef: ElementRef;

  constructor(ef: ElementRef){
    this.elemementRef = ef;
  }
}
