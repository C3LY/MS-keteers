import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITask } from '../../shared/task.model';
import { TaskService } from '../select-tasks-service/task-service.service';

@Component({
  selector: 'app-select-tasks-page',
  templateUrl: './select-tasks-page.component.html',
  styleUrls: ['./select-tasks-page.component.scss']
})

export class SelectTasksPage implements OnInit {

  newTaskForm: FormGroup;
  name: FormControl;
  startTime: FormControl;
  endTime: FormControl;
  information: FormControl;

  constructor(
    private taskService: TaskService,
  ) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.startTime = new FormControl('', Validators.required);
    this.endTime = new FormControl('', Validators.required);
    this.information = new FormControl('', [Validators.required, Validators.maxLength(120)]);

    this.newTaskForm = new FormGroup({
      name: this.name,
      startTime: this.startTime,
      endTime: this.endTime,
      information: this.information
    })
    console.log("yo")
  }
  
  saveTask(formValues) {
    let task: ITask = {
      id: undefined,
      name: formValues.name,
      startTime: formValues.startTime,
      endTime: formValues.endTime,
      information: formValues.information
    }
    console.log(task)
    this.taskService.saveTask(task);
  }

}