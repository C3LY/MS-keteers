import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PopupPunishmentsComponent} from '../popup-punishments/popup-punishments.component';
import { CreatedTaskService } from '../select-tasks/select-tasks-service/created-task-service.service';

export interface Task {
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

  updatedTask: Task[];

  tasks: Task[] = [
    {name: 'create slide deck', duration: 1, timeToDo: '10:00'},
    {name: ' implement search feature', duration: 2, timeToDo: '15:00'}
  ];
  counter: number;
  constructor(private dialog: MatDialog, private createdTaskService: CreatedTaskService, ) { }

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
        const t: Task = {
            name: task.name,
            duration: task.duration.hour,
            timeToDo: '10:00'
        };
        this.tasks.push(t);
      }
    });
  }

  add() {
    this.counter++;
  }

}
