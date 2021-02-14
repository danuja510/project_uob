import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './pages/error/error.component';
import {TeacherComponent} from './pages/masters/teacher/teacher.component';
import {TeacherAddComponent} from './pages/masters/teacher/teacher-add/teacher-add.component';
import {TeacherListComponent} from './pages/masters/teacher/teacher-list/teacher-list.component';
import {CourseComponent} from './pages/masters/course/course.component';
import {TeacherDetailsComponent} from './pages/masters/teacher/teacher-details/teacher-details.component';

const routes: Routes = [
    { path: 'teacher', component: TeacherComponent, children: [
        { path: 'new', component: TeacherAddComponent },
        { path: ':id', component: TeacherDetailsComponent },
        { path: '', component: TeacherListComponent },
      ] },
    { path: 'course/:id', component: CourseComponent },
    { path: 'course', component: CourseComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: '', redirectTo: 'teacher', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
