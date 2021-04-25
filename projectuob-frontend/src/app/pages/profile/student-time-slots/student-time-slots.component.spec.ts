import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimeSlotsComponent } from './student-time-slots.component';

describe('StudentTimeSlotsComponent', () => {
  let component: StudentTimeSlotsComponent;
  let fixture: ComponentFixture<StudentTimeSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTimeSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
