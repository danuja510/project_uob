import {Injectable} from '@angular/core';
import {Student} from '../../pages/masters/student/student.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private student : Student;

  setStudent(student: Student): void {
    this.student = student;
    console.log(this.student.studentNumber);
  }

  getStudent(): Student{
    return this.student;
  }
}
