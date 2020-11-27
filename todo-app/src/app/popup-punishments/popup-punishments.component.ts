import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-popup-punishments',
  templateUrl: './popup-punishments.component.html',
  styleUrls: ['./popup-punishments.component.scss']
})
export class PopupPunishmentsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PopupPunishmentsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close('a value');
  }

  close() {
    this.dialogRef.close();
  }

}
