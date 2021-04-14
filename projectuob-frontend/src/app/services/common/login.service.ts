import {Injectable} from '@angular/core';
import {Student} from '../../pages/masters/student/student.model';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private student : Student;
  studentSub: BehaviorSubject<Student> = new BehaviorSubject<Student>(null);

  constructor(private router: Router) {
  }

  setStudent(student: Student): void {
    this.student = student;
    this.studentSub.next(this.student);
  }

  getStudent(): Student{
    return this.student;
  }

  setTeacherMode(): void{
    this.router.navigate(['/teaching']);
  }

}
