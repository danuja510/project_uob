import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
import {StudentService} from '../../../../services/backend/student.service';
import {LoginService} from '../../../../services/common/login.service';
import {Student} from '../../../../pages/masters/student/student.model';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated = false;
  userFullName: string | undefined = '';

  constructor(private oktaAuthService: OktaAuthService, private studentService: StudentService, private login: LoginService) { }

  ngOnInit(): void {
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    );
  }

  private getUserDetails() {
    if (this.isAuthenticated) {
      this.oktaAuthService.getUser().then(
        res => {
          this.userFullName = res.name;
          // console.log(res);
          this.studentService.findStudentByEmail(res.email).subscribe(
            responce => {
              const students = responce;
              if (students.length === 0) {
                const student = new Student('ss', res.given_name, res.family_name, res.email, true);
                this.studentService.addStudent(student).subscribe(
                  responce2 => {
                    this.login.setStudent(responce2);
                  }
                );
              }else {
                this.login.setStudent(students[0]);
              }
            }
          );
        }
      );
    }
  }

  logout() {
    this.oktaAuthService.signOut();
  }
}
