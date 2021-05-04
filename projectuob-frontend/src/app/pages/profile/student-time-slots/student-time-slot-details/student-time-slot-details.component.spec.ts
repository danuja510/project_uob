import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTimeSlotDetailsComponent } from './student-time-slot-details.component';

describe('StudentTimeSlotDetailsComponent', () => {
  let component: StudentTimeSlotDetailsComponent;
  let fixture: ComponentFixture<StudentTimeSlotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTimeSlotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimeSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
