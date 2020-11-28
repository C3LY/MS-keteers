import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PopupPunishmentsComponent} from '../popup-punishments/popup-punishments.component';
import { CreatedTaskService } from '../select-tasks/select-tasks-service/created-task-service.service';
import {ITask} from '../shared/task.model';


@Component({
  selector: 'app-main-timer-page',
  templateUrl: './main-timer-page.component.html',
  styleUrls: ['./main-timer-page.component.scss']
})

export class MainTimerPageComponent implements OnInit {
  constructor(private dialog: MatDialog, private createdTaskService: CreatedTaskService, ) { }

  updatedTask: ITask[];



  parentMessage: ITask = {id: 1, name: 'test', duration: {hour:0, minutes: 25}, startTime: '00:00'};

  currentTask;

  tasks: ITask[] = [
    {id: 1, name: 'create slide deck', duration: {hour: 1, minutes: 0}, startTime: '10:00'},
    {id: 2, name: 'implement search feature', duration: {hour: 2, minutes: 30}, startTime: '15:00'},
  ];
  counter: number;

  messageOfTimer: string;

  disableClock: boolean;

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.counter;
    this.dialog.open(PopupPunishmentsComponent, dialogConfig);

    // const dialogRef = this.dialog.open(PopupPunishmentsComponent, dialogConfig);
  }

  ngOnInit() {
    this.counter = 0;
    this.createdTaskService.getUpdatedTasks().subscribe((tasks) => {
      for (const task of tasks) {
        const t: ITask = {
            id: task.id,
            name: task.name,
            duration: task.duration,
            startTime: task.startTime
        };
        this.tasks.push(t);
      }
    });

    this.disableClock = true;

  }

  add() {
    this.counter++;
  }

  assignCurrentTask(selectedTask) {
    this.currentTask = selectedTask;
    this.parentMessage = this.currentTask;
}

  receiveMessage($event) {
    this.messageOfTimer = $event;

    this.disableClock = this.messageOfTimer === 'true';
  }
}
