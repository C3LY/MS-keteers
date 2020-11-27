import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTimerPageComponent} from "./main-timer-page/main-timer-page.component";
import { SelectTasksPage } from './select-tasks/select-tasks-page/select-tasks-page.component';

import {StartUpPageComponent} from './start-up-page/start-up-page.component';
import {SetupMakeGoals1Component} from './setup-make-goals1/setup-make-goals1.component';
import {SetupCheckCalendar2Component} from './setup-check-calendar2/setup-check-calendar2.component';

const routes: Routes = [
  {path: '', component: StartUpPageComponent},
  {
    path: 'setup-makeGoals', component: SetupMakeGoals1Component}, //make as same path later
    {path: 'setup-checkCalendar', component: SetupCheckCalendar2Component},
  {
    path: 'timer',
    component: MainTimerPageComponent,
  },
  {
    path: 'selectTasks',
    component: SelectTasksPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
