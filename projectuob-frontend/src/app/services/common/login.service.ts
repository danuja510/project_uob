import {Injectable} from '@angular/core';
import {Student} from '../../pages/masters/student/student.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private student : Student;
  studentSub: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);

  setStudent(student: Student): void {
    this.student = student;
    this.studentSub.next(this.student);
  }

  getStudent(): Student{
    return this.student;
  }
}
