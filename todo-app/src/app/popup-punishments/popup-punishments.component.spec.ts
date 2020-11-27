import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPunishmentsComponent } from './popup-punishments.component';

describe('PopupPunishmentsComponent', () => {
  let component: PopupPunishmentsComponent;
  let fixture: ComponentFixture<PopupPunishmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPunishmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPunishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
