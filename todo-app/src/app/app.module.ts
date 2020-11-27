import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTimerPageComponent } from './main-timer-page/main-timer-page.component';
import { ImportCalendarComponent } from './import-calendar/import-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTimerPageComponent,
    ImportCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
