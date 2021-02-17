import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './pages/error/error.component';
import {TeacherComponent} from './pages/masters/teacher/teacher.component';
import {TeacherAddComponent} from './pages/masters/teacher/teacher-add/teacher-add.component';
import {TeacherListComponent} from './pages/masters/teacher/teacher-list/teacher-list.component';
import {CourseComponent} from './pages/masters/course/course.component';
import {TeacherDetailsComponent} from './pages/masters/teacher/teacher-details/teacher-details.component';
import {CourseDetailsComponent} from './pages/masters/course/course-details/course-details.component';
import {CartDetailsComponent} from './pages/components/cart/cart-details/cart-details.component';

const routes: Routes = [
    { path: 'teacher', component: TeacherComponent, children: [
        { path: 'new', component: TeacherAddComponent },
        { path: ':id', component: TeacherDetailsComponent },
        { path: '', component: TeacherListComponent },
      ] },
    { path: 'course/:id', component: CourseDetailsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'cart', component: CartDetailsComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: '', redirectTo: 'teacher', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
