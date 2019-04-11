import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestChildComponent } from './test-parent/test-child/test-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    TestChildComponent,
    TestParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
