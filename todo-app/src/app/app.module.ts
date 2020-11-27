import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainTimerPageComponent} from './main-timer-page/main-timer-page.component';
import {ImportCalendarComponent} from './import-calendar/import-calendar.component';
import {Shared3rdPartyModule} from './shared/shared3rdParty.module';
import { TimerComponent } from './main-timer-page/timer/timer.component';
import { StartUpPageComponent } from './start-up-page/start-up-page.component';
import { SetupMakeGoals1Component } from './setup-make-goals1/setup-make-goals1.component';
import { SetupCheckCalendar2Component } from './setup-check-calendar2/setup-check-calendar2.component';
import { PopupPunishmentsComponent } from './popup-punishments/popup-punishments.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTimerPageComponent,
    ImportCalendarComponent,
    TimerComponent,
    StartUpPageComponent,
    SetupMakeGoals1Component,
    SetupCheckCalendar2Component,
    PopupPunishmentsComponent
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
