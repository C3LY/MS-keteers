import { Injectable } from "@angular/core";
import { ITask } from "../../shared/task.model";

@Injectable()
export class TaskService {

    id: number = 0;

    getTasks(): ITask[] {
        return TASKS;
    }

    saveTask(task: ITask) {
        task.id = this.id;
        TASKS.push(task);
        this.id += 1;
        console.log(TASKS);
    } 

    deleteTask(task: ITask) {
        delete TASKS[task.id];
    }

}

const TASKS: ITask[] = [

]