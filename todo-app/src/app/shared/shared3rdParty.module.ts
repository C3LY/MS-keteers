import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [] ,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    OverlayModule
  ],
  exports: [
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule,
    MatButtonModule,
    MatDialogModule,
    OverlayModule
  ]
})

export class Shared3rdPartyModule {}
