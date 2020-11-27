import { NullTemplateVisitor } from '@angular/compiler';
declare var require: any
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
  ICALevents = []

  tasks: ITask[];

  constructor(private taskService: CreatedTaskService) {}
  
  ngOnInit() {
  }

  handleCalendar(e) {
    this.calendar = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      let parsed = ICAL.parse(fileReader.result);
      this.setEvents(parsed);

    }
    fileReader.readAsText(this.calendar);
  }

  setEvents(calendar) {
    let events = [];
    calendar[2].forEach(event => {
      if (event[0] = "vevent") {
        let parsedEvent = []
        var dtstart, dtend, summary;
        event[1].forEach(property => {
          if (dtstart == null && property[0] == "dtstart") {
            dtstart = [property[0], property[3]];
          }

          else if (dtend == null && property[0] == "dtend") {
            dtend = [property[0], property[3]];
          }
          
          else if (summary == null && property[0] == "summary") {
            summary = [property[0], property[3]];
          }
        });

        if (dtstart && dtend && summary) {
          let dtduration = ["dtduration", new Date(dtend[1]).getTime() - new Date(dtstart[1]).getTime()];
          parsedEvent = [dtstart, dtend, summary, dtduration];
          events.push(parsedEvent);
        }
      }
    })
    this.ICALevents = events;
    console.log(this.ICALevents);

    events.forEach(event => {
      console.log(event[2][1]);
      console.log(Math.floor(event[3][1]/(1000*60*60)));
      console.log(event[3][1]/(1000*60) % 60);

      var name: string = event[2][1];
      var hou: number = Math.floor(event[3][1]/(1000*60*60));
      var min: number = event[3][1]/(1000*60) % 60;

      let task: ITask = {
        id: undefined,
        name: name,
        duration: {
          hour: hou,
          minutes: min
        }
      }

      console.log(task);
      this.taskService.saveTask(task);


    });
  }
}

