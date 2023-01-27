import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopicDisplayComponent } from './topic-display/topic-display.component';
import { SingleTopicComponent } from './single-topic/single-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicDisplayComponent,
    SingleTopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
