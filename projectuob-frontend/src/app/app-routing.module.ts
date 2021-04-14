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
import {CheckoutComponent} from './pages/components/checkout/checkout.component';
import {OktaCallbackComponent} from '@okta/okta-angular';
import {LoginComponent} from './pages/components/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {StarRatingComponent} from './pages/components/star-rating/star-rating.component';
import {TeachingComponent} from './pages/teaching/teaching.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
    {path: 'login/callback', component: OktaCallbackComponent},
    {path: 'login', component: LoginComponent},
    { path: 'teacher', component: TeacherComponent, children: [
        { path: 'new', component: TeacherAddComponent },
        { path: ':id', component: TeacherDetailsComponent },
        { path: '', component: TeacherListComponent },
      ] },
    { path: 'course/:id', component: CourseDetailsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'cart', component: CartDetailsComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'not-found', component: ErrorComponent },
  { path: 'teaching', canActivate: [AuthGuard], component: TeachingComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
