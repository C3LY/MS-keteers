import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../shared/task.model';
import { CreatedTaskService } from '../select-tasks-service/created-task-service.service';

@Component({
  selector: 'app-select-tasks-page',
  templateUrl: './select-tasks-page.component.html',
  styleUrls: ['./select-tasks-page.component.scss']
})

export class SelectTasksPage implements OnInit {

  newTaskForm: FormGroup;
  name: FormControl;
  hour: FormControl;
  minutes: FormControl;

  minutesList: number[];
  hourList: number[];

  tasks: ITask[];

  constructor(
    private taskService: CreatedTaskService,
  ) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.hour = new FormControl('', Validators.required);
    this.minutes = new FormControl('', Validators.required);
   
    this.minutesList = [];
    for (var i=0; i<60; i++) { this.minutesList.push(i); }

    this.hourList = [];
    for (var i=0; i<24; i++) { this.hourList.push(i); }

    this.newTaskForm = new FormGroup({
      name: this.name,
      hour: this.hour,
      minutes: this.minutes
    })
    this.taskService.getUpdatedTasks().subscribe((tasks) => {
      this.tasks = tasks
      console.log(this.tasks);
    });
  }
  
  saveTask(formValues) {

    var hou: number = formValues.hour;
    var min: number = formValues.minutes;

    let task: ITask = {
      id: undefined,
      name: formValues.name,
      duration: {
        hour: hou,
        minutes: min
      }
    }
    console.log(task)
    this.taskService.saveTask(task);
  }

}