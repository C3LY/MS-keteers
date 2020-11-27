import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main-timer-page',
  templateUrl: './main-timer-page.component.html',
  styleUrls: ['./main-timer-page.component.scss']
})
export class MainTimerPageComponent implements OnInit {

  tasks: string[] = ['task1', 'task2'];
  constructor() { }

  ngOnInit() {
  }

}
