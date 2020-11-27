import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCalendarComponent } from './import-calendar.component';

describe('ImportCalendarComponent', () => {
  let component: ImportCalendarComponent;
  let fixture: ComponentFixture<ImportCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
