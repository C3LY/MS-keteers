
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() {
  }

  timeLeft = 1500;
  interval;
  subscribeTimer: any;
  timedefault = 1501;
  timeMinutes = 25;
  timeSeconds = '00';
  toggle = true;
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
  if (this.toggle) {
    this.startTimer();
    this.toggle = false;
  } else {
    this.pauseTimer();
    this.toggle = true;
  }
  }

  resetTimer() {
    this.timeLeft = this.timedefault;
  }
}
