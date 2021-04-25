import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTimeSlotsComponent } from './teacher-time-slots.component';

describe('TeacherTimeSlotsComponent', () => {
  let component: TeacherTimeSlotsComponent;
  let fixture: ComponentFixture<TeacherTimeSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTimeSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
