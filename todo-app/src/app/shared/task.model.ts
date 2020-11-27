import { TimeUnit } from 'ngx-material-timepicker/src/app/material-timepicker/models/time-unit.enum';
import { IterationStatement } from 'typescript';

import { ITime } from './time.model';

export interface ITask {
    id: number,
    name: string,
    duration: ITime
}