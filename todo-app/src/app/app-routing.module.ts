import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTimerPageComponent} from "./main-timer-page/main-timer-page.component";
import { SelectTasksPage } from './select-tasks/select-tasks-page/select-tasks-page.component';

const routes: Routes = [
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
