import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TeachersService} from '../../../../services/backend/teachers.service';
import {Teacher} from '../teacher.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TeacherExperience} from '../teacher-experience.model';
import {TeacherSubject} from '../teacher-subject.model';
import {TeacherTag} from '../teacher-tag.model';
import {SubjectsService} from '../../../../services/backend/subjects.service';
import {Subject} from '../../../../shared/subjects.model';
import {LoginService} from '../../../../services/common/login.service';
import {TeacherTagService} from '../../../../services/backend/teacher-tag.service';
import {TeacherExperienceService} from '../../../../services/backend/teacher-experience.service';
import {TeacherSubjectService} from '../../../../services/backend/teacher-subject.service';
import {TeacherDetailService} from '../../../../services/backend/teacher-detail.service';
import {TeacherDetail} from '../teacher-detail.model';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit, OnDestroy {
  teacherForm: FormGroup;
  teacherExperienceForm: FormGroup;
  teacherSubjectForm: FormGroup;
  teacherTagForm: FormGroup;
  teacherExperienceArray: TeacherExperience[] = [];
  teacherSubjectArray: TeacherSubject[] = [];
  teacherTagArray: TeacherTag[] = [];
  subjects: Subject[];
  newSubjects: Subject[] = [];
  existingSubjects: Subject[] = [];
  teacherTags: TeacherTag[];

  constructor(private teacherService: TeachersService,
              private router: Router,
              private route: ActivatedRoute,
              private subjectService: SubjectsService,
              private login: LoginService,
              private teacherTagService: TeacherTagService,
              private teacherExperienceService: TeacherExperienceService,
              private teacherSubjectService: TeacherSubjectService,
              private teacherDetailsService: TeacherDetailService) { }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({
      teacherTelephone: new FormControl('', [Validators.required]),
      teacherAddress: new FormControl('', [Validators.required]),
      teacherZoomAddress: new FormControl('', Validators.required)
    });

    this.teacherExperienceForm = new FormGroup({
      title: new FormControl('', Validators.required),
      institution: new FormControl('', Validators.required),
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

    this.subjectService.getSubjects().subscribe(
      responce => {
        this.subjects = responce;
      }
    );

    this.teacherTagService.getDistinctTags().subscribe(
      responce => {
        this.teacherTags = responce;
      }
    );
  }

  onSubmit(): void{
    /*const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    const formatedToday = mm + '/' + dd + '/' + yyyy;*/

    let rand = (Math.random() * 1000);
    rand = Math.floor(rand);

    let teacher = new Teacher(
      this.login.getStudent().studentFirstName.toLowerCase().trim().concat('-' + rand),
      this.login.getStudent().studentFirstName,
      this.login.getStudent().studentLastName,
      this.login.getStudent().studentEmail,
      new Date(),
      true,
      this.login.getStudent().imageUrl
      );

    this.teacherService.addTeacher(teacher).subscribe(
      response => {
        // setting teacher objects teacher id from the response of the rest api
        teacher = response;

        this.teacherDetailsService.addTeacherDetails(new TeacherDetail(
          this.teacherForm.value.teacherTelephone,
          this.teacherForm.value.teacherAddress,
          this.teacherForm.value.teacherZoomAddress,
          teacher.teacherId)).subscribe();

        // setting the teacher id for the teacherExperience objects and posting them
        for (const exp of this.teacherExperienceArray) {
          exp.teacherId = teacher.teacherId;
          console.log(exp);
          this.teacherExperienceService.addTeacherExperience(exp).subscribe();
        }

        for (const teacherSub of this.teacherSubjectArray) {
          teacherSub.teacherId = teacher.teacherId;
          this.teacherSubjectService.addTeacherSubject(teacherSub).subscribe();
        }

        for (let sub of this.newSubjects) {
          this.subjectService.addSubject(sub).subscribe(
            response2 => {
              sub = response2;
              this.teacherSubjectService.addTeacherSubject(new TeacherSubject( sub.subjectId, teacher.teacherId)).subscribe();
            }
          );
        }

        // adding the teacher tags
        for (const tag of this.teacherTagArray) {
          tag.teacherId = teacher.teacherId;
          this.teacherTagService.addTeacherTag(tag).subscribe();
        }
        this.router.navigate(['/teaching'], {relativeTo: this.route});
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
        this.teacherExperienceForm.value.currentlyWorking === 'currentlyWorking',
        this.teacherExperienceForm.value.institution
      ));
    this.teacherExperienceForm.reset();
    this.teacherExperienceForm.patchValue({
      title: '',
      institution: '',
      description: '',
      from: new Date(),
      to: new Date(),
      currentlyWorking: 'currentlyWorking'
    });
  }

  removeExp(i: number): void {
    this.teacherExperienceArray.splice(i, 1);
  }

  ngOnDestroy(): void {
  }

  addSubject(): void {
    for ( const sub of this.newSubjects){
      if (this.teacherSubjectForm.value.subject.toLowerCase() === sub.subjectName){
        return;
      }
    }
    for ( const sub of this.existingSubjects){
      if (this.teacherSubjectForm.value.subject.toLowerCase() === sub.subjectName){
        return;
      }
    }
    for (const subject of this.subjects){
      if (this.teacherSubjectForm.value.subject.toLowerCase() === subject.subjectName){
        this.teacherSubjectArray.push(new TeacherSubject(subject.subjectId));
        this.existingSubjects.push(subject);
        this.teacherSubjectForm.reset();
        return;
      }
    }
    this.newSubjects.push(
      new Subject(this.teacherSubjectForm.value.subject.toLowerCase(), true)
    );
    this.teacherSubjectForm.reset();
  }

  removeSubEx(i: number): void {
    this.existingSubjects.splice(i, 1);
    this.teacherSubjectArray.splice(i, 1);
  }

  removeSubNew(i: number): void {
    this.newSubjects.splice(i, 1);
  }

  addTeacherTag(): void {
    for ( const tag of this.teacherTagArray){
      if (this.teacherTagForm.value.tag.toLowerCase() === tag.tag){
        return;
      }
    }
    this.teacherTagArray.push(new TeacherTag(this.teacherTagForm.value.tag.toLowerCase()));
    this.teacherTagForm.reset();
  }

  removeTag(i: number): void {
    this.teacherTagArray.splice(i, 1);
  }
}
