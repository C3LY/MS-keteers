
import { Component, OnInit, OnDestroy,  Output, EventEmitter, Input } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import {ITask} from '../../shared/task.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() parentMessage: ITask = {id: 1, name: 'test', duration: {hour:0, minutes: 25}, startTime: '00:00'};

  constructor() {
  }


  timeLeft = 1500;
  interval;
  subscribeTimer: any;
  timedefault = 1501;
  timeMinutes = 25;
  timeSeconds = '00';
  toggleOff = true;

  @Output() messageEvent = new EventEmitter<string>();

    ngOnInit(): void {

    }

  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.timeMinutes = Math.floor(this.timeLeft / 60);
        this.timeSeconds = (Math.floor(this.timeLeft - (this.timeMinutes * 60))).toString();
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  toggleTimer() {
  if (this.toggleOff) {
    this.startTimer();
    this.toggleOff = false;
  } else {
    this.pauseTimer();
    this.toggleOff = true;
  }

  this.sendMessage();
  }

  resetTimer() {
    if (this.parentMessage) {
     this.timedefault = (this.parentMessage.duration.hour * 60 * 60) + (this.parentMessage.duration.minutes * 60) + 1;
    }
    this.timeLeft = this.timedefault;
  }

  sendMessage() {
    this.messageEvent.emit(this.toggleOff.toString());
  }


}
