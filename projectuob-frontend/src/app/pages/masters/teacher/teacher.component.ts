import { Component, OnInit } from '@angular/core';
import {TeachersService} from '../../../services/backend/teachers.service';
import {Teacher} from './teacher.model';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  private teachers: Teacher[];

  constructor(private teacherService: TeachersService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(
      data => {
        this.teachers = data;
    }
    );
  }

}
