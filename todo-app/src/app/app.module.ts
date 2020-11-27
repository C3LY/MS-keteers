import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTimerPageComponent } from './main-timer-page/main-timer-page.component';
import { SelectTasksPage } from './select-tasks/select-tasks-page/select-tasks-page.component';
import { TaskService } from './select-tasks/select-tasks-service/task-service.service';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    MainTimerPageComponent,
    SelectTasksPage
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
    NgxMaterialTimepickerModule,
    MatIconModule
  ],
  providers: [
    TaskService,
    MatIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
