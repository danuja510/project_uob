import { Component, OnInit } from '@angular/core';
import {Teacher} from '../teacher.model';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
  public teachers: Teacher[];

  constructor(private teacherService: TeachersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(
      data => {
        this.teachers = data;
      }
    );
  }

  onNewTeacher(): void{
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
