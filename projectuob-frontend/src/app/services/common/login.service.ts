import {Injectable} from '@angular/core';
import {Student} from '../../pages/masters/student/student.model';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Teacher} from '../../pages/masters/teacher/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private student : Student;
  private teacher : Teacher;
  studentSub: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);
  teacherSub: BehaviorSubject<Teacher> = new BehaviorSubject<Teacher>(null);

  constructor(private router: Router) {
  }

  setStudent(student: Student): void {
    this.student = student;
    this.studentSub.next(this.student);
  }

  getStudent(): Student{
    return this.student;
  }

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
    this.teacherSub.next(this.teacher);
  }

  getTeacher(): Teacher {
    return this.teacher;
  }

  setTeacherMode(): void{
    this.router.navigate(['/teaching']);
  }

}
