import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMakeGoals1Component } from './setup-make-goals1.component';

describe('SetupMakeGoals1Component', () => {
  let component: SetupMakeGoals1Component;
  let fixture: ComponentFixture<SetupMakeGoals1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupMakeGoals1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMakeGoals1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
