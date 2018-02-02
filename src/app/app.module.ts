import { MglTimelineModule } from './timeline/timeline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
