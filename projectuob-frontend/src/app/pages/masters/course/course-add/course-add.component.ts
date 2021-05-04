import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../../services/common/login.service';
import {CoursesService} from '../../../../services/backend/courses.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseSubject} from '../course-subject.model';
import {CourseTag} from '../course-tag.model';
import {Subject} from '../../../../shared/subjects.model';
import {CourseSubjectService} from '../../../../services/backend/course-subject.service';
import {CourseTagService} from '../../../../services/backend/course-tag.service';
import {CourseTeacherService} from '../../../../services/backend/course-teacher.service';
import {SubjectsService} from '../../../../services/backend/subjects.service';
import {Course} from '../course.model';
import {CourseTeacher} from '../course-teacher.model';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  courseForm: FormGroup;
  courseSubjectForm: FormGroup;
  courseTagForm: FormGroup;
  courseSubjectArray: CourseSubject[] = [];
  courseTagArray: CourseTag[] = [];
  existingSubjectArray: Subject[] = [];
  newSubjectArray: Subject[] = [];
  subjects: Subject[];
  courseTags: CourseTag[];

  constructor(
    private login: LoginService,
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private courseSubjectService: CourseSubjectService,
    private courseTagService: CourseTagService,
    private courseTeacherService: CourseTeacherService,
    private subjectService: SubjectsService
  ) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      courseName: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      perSessionPrice: new FormControl('', Validators.required),
      courseImage: new FormControl('')
    });

    this.courseSubjectForm = new FormGroup({
      subject: new FormControl('', Validators.required)
    });

    this.courseTagForm = new FormGroup({
      tag: new FormControl('', Validators.required)
    });

    this.subjectService.getSubjects().subscribe(
      responce => {
        this.subjects = responce;
      }
    );

    this.courseTagService.getDistinctTags().subscribe(
      responce => {
        this.courseTags = responce;
      }
    );
  }

  removeExistingSubject(i: number): void {
    this.existingSubjectArray.splice(i, 1);
  }

  removeNewSubject(i: number): void {
    this.newSubjectArray.splice(i, 1);
  }

  removeTag(i: number): void {
    this.courseTagArray.splice(i, 1);
  }

  onSubmit(): void {

    let rand = (Math.random() * 1000);
    rand = Math.floor(rand);

    let course = new Course(
      this.courseForm.value.courseName.toLowerCase().trim().concat('-' + rand),
      this.courseForm.value.courseName,
      this.courseForm.value.courseDescription,
      true,
      this.courseForm.value.perSessionPrice,
      this.courseForm.value.courseImage
    );
    this.courseService.addCourse(course).subscribe(
      responce => {
        course = responce;

        this.courseTeacherService.addCourseTeacher(
          new CourseTeacher(
            this.login.getTeacher().teacherId,
            course.courseId)
        ).subscribe();

        for (const sub of this.courseSubjectArray) {
          sub.courseId = course.courseId;
          this.courseSubjectService.addCourseSubject(sub).subscribe();
        }

        for (let sub of this.newSubjectArray) {
          this.subjectService.addSubject(sub).subscribe(
            responce2 => {
              sub = responce2;
              this.courseSubjectService.addCourseSubject(new CourseSubject(sub.subjectId, course.courseId)).subscribe();
            }
          );
        }

        for (const tag of this.courseTagArray) {
          tag.courseId = course.courseId;
          this.courseTagService.addCourseTag(tag).subscribe();
        }
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    );
  }

  addTag(): void {
    for (const tag of this.courseTagArray) {
      if (this.courseTagForm.value.tag === tag.tag) {
        return;
      }
    }
    this.courseTagArray.push(new CourseTag(this.courseTagForm.value.tag));
  }

  addSubject(): void {
    for (const sub of this.existingSubjectArray){
      if (sub.subjectName === this.courseSubjectForm.value.subject){
        return;
      }
    }
    for (const sub of this.newSubjectArray) {
      if (sub.subjectName === this.courseSubjectForm.value.subject){
        return;
      }
    }
    for (const sub of this.subjects) {
      if (this.courseSubjectForm.value.subject === sub.subjectName){
        this.existingSubjectArray.push(sub);
        this.courseSubjectArray.push(new CourseSubject(sub.subjectId));
        return;
      }
    }
    this.newSubjectArray.push(new Subject(this.courseSubjectForm.value.subject, true));
  }

}
