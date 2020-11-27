import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainTimerPageComponent} from './main-timer-page/main-timer-page.component';

const routes: Routes = [
  {
    path: 'timer',
    component: MainTimerPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
