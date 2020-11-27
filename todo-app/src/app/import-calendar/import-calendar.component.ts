import { NullTemplateVisitor } from '@angular/compiler';
declare var require: any;
import { Component, OnInit } from '@angular/core';
const ICAL = require('ical.js');

@Component({
  selector: 'app-import-calendar',
  templateUrl: './import-calendar.component.html',
  styleUrls: ['./import-calendar.component.scss']
})
export class ImportCalendarComponent implements OnInit {

  calendar: File = null;
  ICALevents = [];

  constructor() { }

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
        const wantedParams = ['dtstart', 'dtend', 'summary'];
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
  }
}

