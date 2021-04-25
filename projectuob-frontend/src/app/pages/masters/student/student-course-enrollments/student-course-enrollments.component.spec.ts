import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseEnrollmentsComponent } from './student-course-enrollments.component';

describe('StudentCourseEnrollmentsComponent', () => {
  let component: StudentCourseEnrollmentsComponent;
  let fixture: ComponentFixture<StudentCourseEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCourseEnrollmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
