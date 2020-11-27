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

  tasks: ITask[];

  constructor(
    private taskService: TaskService,
  ) {}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.startTime = new FormControl('', Validators.required);
    this.endTime = new FormControl('', Validators.required);
   
    this.newTaskForm = new FormGroup({
      name: this.name,
      startTime: this.startTime,
      endTime: this.endTime,
    })
    this.taskService.getUpdatedTasks().subscribe((tasks) => {
      this.tasks = tasks
      console.log(this.tasks);
    });
  }
  
  saveTask(formValues) {
    let task: ITask = {
      id: undefined,
      name: formValues.name,
      startTime: formValues.startTime,
      endTime: formValues.endTime,
    }
    console.log(task)
    this.taskService.saveTask(task);
  }

}