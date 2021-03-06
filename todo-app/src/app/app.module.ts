import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTimerPageComponent } from './main-timer-page/main-timer-page.component';
import { SelectTasksPageComponent } from './select-tasks/select-tasks-page/select-tasks-page.component';
import { CreatedTaskService } from './select-tasks/select-tasks-service/created-task-service.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {ImportCalendarComponent} from './import-calendar/import-calendar.component';
import {Shared3rdPartyModule} from './shared/shared3rdParty.module';
import { TimerComponent } from './main-timer-page/timer/timer.component';
import { StartUpPageComponent } from './start-up-page/start-up-page.component';
import { SetupMakeGoals1Component } from './setup-make-goals1/setup-make-goals1.component';
import { SetupCheckCalendar2Component } from './setup-check-calendar2/setup-check-calendar2.component';
import { PopupPunishmentsComponent } from './popup-punishments/popup-punishments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MainTimerPageComponent,
    SelectTasksPageComponent,
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
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    Shared3rdPartyModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [
    CreatedTaskService,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
