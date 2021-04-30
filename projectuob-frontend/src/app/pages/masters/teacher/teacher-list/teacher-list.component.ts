import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher.model';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {RatingService} from '../../../../services/backend/rating.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  public teachers: Teacher[];
  teacherRatings: {itemId: number, rating: number}[] =  [];

  constructor(
    private teacherService: TeachersService,
    private router: Router,
    private route: ActivatedRoute,
    private ratingService: RatingService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        if (queryParams.subject){
          this.teacherService.filterBySubject(queryParams.subject).subscribe(
            data => {
              this.teachers = data;
              this.getRatings(this.teachers);
            }
          );
        } else {
          this.teacherService.getTeachers().subscribe(
            data => {
              this.teachers = data;
              this.getRatings(this.teachers);
            }
          );
        }
      }
    );
  }

  onNewTeacher(): void{
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  getRatings(teachers: Teacher[]): void{
    for (const teacher of teachers) {
      this.ratingService.getTeacherAverageRatingByTeacher(teacher.teacherId).subscribe({
          next: response => {
            this.teacherRatings.push(response);
          }, error: err => {
            this.teacherRatings.push({itemId: teacher.teacherId, rating: 0});
          }
        }
      );
    }
  }

  getAverageRating(id: number): number {
    // @ts-ignore
    return this.teacherRatings.find(({itemId}) => itemId === id).rating;
  }

}
