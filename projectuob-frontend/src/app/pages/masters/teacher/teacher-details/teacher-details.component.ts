import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {
  teacher: Teacher;

  constructor(private route: ActivatedRoute, private teacherService: TeachersService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.teacherService.getTeacher( +params.id ).subscribe(
            data => {
              this.teacher = data;
              console.log(data);
            }
        );
      }
    );
  }

}
