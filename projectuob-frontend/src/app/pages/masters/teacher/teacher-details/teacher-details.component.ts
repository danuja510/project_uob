import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';
import {LoginService} from '../../../../services/common/login.service';
import {TeacherRating} from '../../../../shared/teacher-rating.model';
import {RatingService} from '../../../../services/backend/rating.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  teacher: Teacher;
  teacherEnrolled = false;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeachersService,
    private login: LoginService,
    private ratingService: RatingService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.teacherService.getTeacher( +params.id ).subscribe(
            data => {
              this.teacher = data;
              if (this.login.getStudent()){
                this.teacherService.getTeachersByStudentEnrollment(this.login.getStudent().studentNumber).subscribe(
                  response => {
                    const enrolledTeachers = response;
                    for (const tempEnrollment of enrolledTeachers){
                      if (tempEnrollment.teacherId === this.teacher.teacherId){
                        this.teacherEnrolled = true;
                      }
                    }
                  }
                );
              }
            }
        );
      }
    );
  }

  addRating(rating: number): void {
    const teacherRating: TeacherRating = new TeacherRating( this.login.getStudent().studentNumber, this.teacher.teacherId, rating);
    this.ratingService.addTeacherRating(teacherRating).subscribe();
  }
}
