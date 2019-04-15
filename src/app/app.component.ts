import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParentChild';

  myOpenState: string = "let it be";
  private _internalState: string = 'not authorized';

  foo() {
    console.log('foo');
  }

  private bar() {
    console.log('bar');
  }
}
