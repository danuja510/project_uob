import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './pages/error/error.component';
import {TeacherComponent} from './pages/masters/teacher/teacher.component';
import {TeacherAddComponent} from './pages/masters/teacher/teacher-add/teacher-add.component';
import {TeacherListComponent} from './pages/masters/teacher/teacher-list/teacher-list.component';
import {CourseComponent} from './pages/masters/course/course.component';

const routes: Routes = [
  { path: '', redirectTo: 'course', pathMatch: 'full' },
  { path: 'teacher', component: TeacherComponent, children: [
      { path: '', component: TeacherListComponent },
      { path: 'new', component: TeacherAddComponent}
    ] },
  { path: 'course', component: CourseComponent },
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
