import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-popup-punishments',
  templateUrl: './popup-punishments.component.html',
  styleUrls: ['./popup-punishments.component.scss']
})
export class PopupPunishmentsComponent implements OnInit {

  counter = 1 ;
  noMoreFlag = false;
  constructor(
    private dialogRef: MatDialogRef<PopupPunishmentsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.counter = data;
  }

  punishments: string[] = ['do 5 pushups', 'do 10 star jumps', 'eat a lemon', '15 situps', 'take an arrow to the knee'];
  punishmentGiven;

  listOfPunishmentsGiven: string[] = new Array();

  ngOnInit() {
    this.noMoreFlag = this.counter < 1;
  }

  save() {
    this.dialogRef.close('a value');
  }

  close() {
    this.dialogRef.close();
  }

  randomizePunishment() {
    if (!this.noMoreFlag) {
      const currentPunishment = this.punishmentGiven;
      while (this.punishmentGiven === currentPunishment) {
        this.punishmentGiven = this.punishments[Math.floor(Math.random() * Math.floor(this.punishments.length - 1))];
      }

      this.counter--;
      this.listOfPunishmentsGiven.push(this.punishmentGiven);

      if (this.counter <= 0) {
        this.noMoreFlag = true;
      }
    }

  }

}
