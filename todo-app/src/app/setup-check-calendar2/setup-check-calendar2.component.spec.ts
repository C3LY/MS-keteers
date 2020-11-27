import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCheckCalendar2Component } from './setup-check-calendar2.component';

describe('SetupCheckCalendar2Component', () => {
  let component: SetupCheckCalendar2Component;
  let fixture: ComponentFixture<SetupCheckCalendar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupCheckCalendar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCheckCalendar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
