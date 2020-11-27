import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTimerPageComponent } from './main-timer-page.component';

describe('MainTimerPageComponent', () => {
  let component: MainTimerPageComponent;
  let fixture: ComponentFixture<MainTimerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTimerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTimerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
