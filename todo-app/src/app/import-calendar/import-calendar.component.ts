import { NullTemplateVisitor } from '@angular/compiler';
declare var require: any;
import { Component, OnInit } from '@angular/core';
import { ITask } from '../shared/task.model';
import { CreatedTaskService } from '../select-tasks/select-tasks-service/created-task-service.service';
const ICAL = require('ical.js');

@Component({
  selector: 'app-import-calendar',
  templateUrl: './import-calendar.component.html',
  styleUrls: ['./import-calendar.component.scss']
})
export class ImportCalendarComponent implements OnInit {

  calendar: File = null;
  ICALevents = [];

  tasks: ITask[];

  constructor(private taskService: CreatedTaskService) {}

  ngOnInit() {
  }

  handleCalendar(e) {
    this.calendar = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const parsed = ICAL.parse(fileReader.result);
      this.setEvents(parsed);

    };
    fileReader.readAsText(this.calendar);
  }

  setEvents(calendar) {
    const events = [];
    calendar[2].forEach(event => {
      if (event[0] = 'vevent') {
        let parsedEvent = [];
        let dtstart, dtend, summary;
        event[1].forEach(property => {
          if (dtstart == null && property[0] == 'dtstart') {
            dtstart = [property[0], property[3]];
          } else if (dtend == null && property[0] == 'dtend') {
            dtend = [property[0], property[3]];
          } else if (summary == null && property[0] == 'summary') {
            summary = [property[0], property[3]];
          }
        });

        if (dtstart && dtend && summary) {
          const dtduration = ['dtduration', new Date(dtend[1]).getTime() - new Date(dtstart[1]).getTime()];
          parsedEvent = [dtstart, dtend, summary, dtduration];
          events.push(parsedEvent);
        }
      }
    });
    this.ICALevents = events;
    console.log(this.ICALevents);

    events.forEach(event => {
      console.log(event[2][1]);
      console.log(Math.floor(event[3][1] / (1000 * 60 * 60)));
      console.log(event[3][1] / (1000 * 60) % 60);

      const name: string = event[2][1];
      const hou: number = Math.floor(event[3][1] / (1000 * 60 * 60));
      const min: number = event[3][1] / (1000 * 60) % 60;

      const task: ITask = {
        id: undefined,
        name: name,
        duration: {
          hour: hou,
          minutes: min
        },
        startTime: '00:00'
      };

      console.log(task);
      this.taskService.saveTask(task);


    });
  }
}

