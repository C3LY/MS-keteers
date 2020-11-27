import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainTimerPageComponent} from './main-timer-page/main-timer-page.component';
import {ImportCalendarComponent} from './import-calendar/import-calendar.component';
import {Shared3rdPartyModule} from './shared3rd-party.module';


@NgModule({
  declarations: [
    AppComponent,
    MainTimerPageComponent,
    ImportCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Shared3rdPartyModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
