import { Injectable } from "@angular/core";
import { ITask } from "../../shared/task.model";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class CreatedTaskService {

    id: number = 0;
    private tasks: BehaviorSubject<ITask[]>;

    constructor() {
        this.tasks = new BehaviorSubject<ITask[]>(TASKS);
    }

    getTasks(): ITask[] {
        return TASKS;
    }

    getUpdatedTasks(): Observable<ITask[]> {
        return this.tasks.asObservable();
    }

    saveTask(task: ITask) {
        task.id = this.id;
        TASKS.push(task);
        this.id += 1;
        console.log(TASKS);
        this.tasks.next(TASKS);
    } 

    deleteTask(task: ITask) {
        delete TASKS[task.id];
    }

}

const TASKS: ITask[] = [

]