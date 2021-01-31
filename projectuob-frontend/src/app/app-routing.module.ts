import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './pages/error/error.component';
import {TeacherComponent} from './pages/masters/teacher/teacher.component';
import {TeacherAddComponent} from './pages/masters/teacher/teacher-add/teacher-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'teacher', pathMatch: 'full' },
  { path: 'teacher', component: TeacherComponent, children: [
      { path: '', redirectTo: 'new', pathMatch: 'full' },
      { path: 'new', component: TeacherAddComponent}
    ] },
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
