import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material';

@NgModule({
  declarations: [] ,
  imports: [
   CommonModule,
  MatCardModule,
    MatProgressBarModule,
    MatRippleModule
  ],
  exports: [
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule
  ]
})

export class Shared3rdPartyModule {}
