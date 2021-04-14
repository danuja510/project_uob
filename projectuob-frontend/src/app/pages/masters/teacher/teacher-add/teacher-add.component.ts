import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherExperience} from '../teacher-experience.model';
import {TeacherSubject} from '../teacher-subject.model';
import {TeacherTag} from '../teacher-tag.model';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {
  teacherForm: FormGroup;
  teacherExperienceForm: FormGroup;
  teacherSubjectForm: FormGroup;
  teacherTagForm: FormGroup;
  teacherExperienceArray: TeacherExperience[] = [];
  teacherSubjectArray: TeacherSubject[] = [];
  teacherTagArray: TeacherTag[] = [];

  constructor(private teacherService: TeachersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      teacherTelephone: new FormControl('', [Validators.required]),
      teacherZoomAddress: new FormControl('', Validators.required)
    });

    this.teacherExperienceForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      from: new FormControl(new Date(), Validators.required),
      to: new FormControl(new Date(), Validators.required),
      currentlyWorking: new FormControl('currentlyWorking')
    });

    this.teacherSubjectForm = new FormGroup({
      subject: new FormControl('', Validators.required)
    });

    this.teacherTagForm = new FormGroup({
      tag: new FormControl('', Validators.required)
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
      new Date(),
      true,
      );

    this.teacherService.addTeacher(teacher).subscribe(
      responce => {
        console.log(responce);
        this.teacherForm.reset();
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  addTeacherExperience(): void {
    this.teacherExperienceArray.push(
      new TeacherExperience(
        this.teacherExperienceForm.value.title,
        this.teacherExperienceForm.value.description,
        this.teacherExperienceForm.value.from,
        this.teacherExperienceForm.value.to,
        this.teacherExperienceForm.value.currentlyWorking === 'currentlyWorking'));
    console.log(this.teacherExperienceArray);
    this.teacherExperienceForm.reset();
  }
}
