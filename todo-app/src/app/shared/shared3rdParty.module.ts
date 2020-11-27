import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [] ,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule
  ]
})

export class Shared3rdPartyModule {}
