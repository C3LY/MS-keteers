import {Component, OnInit} from '@angular/core';

interface Task {
  name: string;
  duration: number;
  timeToDo: string;
}

@Component({
  selector: 'app-main-timer-page',
  templateUrl: './main-timer-page.component.html',
  styleUrls: ['./main-timer-page.component.scss']
})

export class MainTimerPageComponent implements OnInit {

  tasks: Task[] = [
    {name: 'create slide deck', duration: 1, timeToDo: '10:00'},
    {name: ' implement search feature', duration: 2, timeToDo: '15:00'}
  ];
  counter: number;
  constructor() { }

  ngOnInit() {
    this.counter = 0;
  }

  add() {
    this.counter++;
  }

}
