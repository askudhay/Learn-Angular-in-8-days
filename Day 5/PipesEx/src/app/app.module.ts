import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { INRPipe } from './inr.pipe';
import { MBPipe } from './mb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    INRPipe,
    MBPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
