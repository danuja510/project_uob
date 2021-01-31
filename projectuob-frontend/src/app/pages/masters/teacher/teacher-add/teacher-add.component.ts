import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  teacherForm: FormGroup;

  constructor(private teacherService: TeachersService) { }

  ngOnInit(): void {


    this.teacherForm = new FormGroup({
      teacherFirstName: new FormControl(null, Validators.required),
      teacherLastName: new FormControl(null, Validators.required),
      teacherEmail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void{
    /*const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const formatedToday = mm + '/' + dd + '/' + yyyy;*/

    let rand = (Math.random() * 1000);
    rand = Math.floor(rand);

    const teacher = new Teacher(
      this.teacherForm.value.teacherFirstName.toLowerCase().trim().concat('-' + rand),
      this.teacherForm.value.teacherFirstName,
      this.teacherForm.value.teacherLastName,
      this.teacherForm.value.teacherEmail,
      this.teacherForm.value.password,
      this.teacherForm.value.imageUrl,
      new Date(),
      true,
      );

    this.teacherService.addTeachers(teacher).subscribe(
      responce => {
        console.log(responce);
        this.teacherForm.reset();
      }
    );
  }

}
