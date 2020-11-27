
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    ngOnInit(): void {

    }

  name = 'Angular 6';
  timeLeft = 121;
  interval;
  subscribeTimer: any;

  timeMinutes = 0;
  timeSeconds = 0;

  constructor() {
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
        this.timeSeconds = Math.floor(this.timeLeft - (this.timeMinutes* 60));
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
