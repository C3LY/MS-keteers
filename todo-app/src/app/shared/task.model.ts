import { ITime } from './time.model';

export interface ITask {
    id: number,
    name: string,
    duration: ITime
}