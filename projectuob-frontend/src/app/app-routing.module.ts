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
import {TeachingComponent} from './pages/teaching/teaching.component';
import {AuthGuard} from './auth-guard.service';
import {TeacherCoursesComponent} from './pages/teaching/teacher-courses/teacher-courses.component';
import {CourseAddComponent} from './pages/masters/course/course-add/course-add.component';
import {TeacherTimeSlotsComponent} from './pages/teaching/teacher-time-slots/teacher-time-slots.component';
import {TimeSlotAddComponent} from './pages/teaching/teacher-time-slots/time-slot-add/time-slot-add.component';
import {TimeSlotDetailsComponent} from './pages/teaching/teacher-time-slots/time-slot-details/time-slot-details.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {EnrolledCoursesComponent} from './pages/profile/enrolled-courses/enrolled-courses.component';
import {OrdersComponent} from './pages/profile/orders/orders.component';
import {StudentTimeSlotsComponent} from './pages/profile/student-time-slots/student-time-slots.component';
import {ReserveTimeSlotComponent} from './pages/components/reserve-time-slot/reserve-time-slot.component';
import {ReserveTimeSlotDetailsComponent} from './pages/components/reserve-time-slot/reserve-time-slot-details/reserve-time-slot-details.component';

const routes: Routes = [
    {path: 'login/callback', component: OktaCallbackComponent},
    {path: 'login', component: LoginComponent},
    { path: 'teacher', component: TeacherComponent, children: [
        { path: 'new', component: TeacherAddComponent },
        { path: ':id', component: TeacherDetailsComponent },
        { path: '', component: TeacherListComponent },
      ] },
    { path: 'course/:id/reserve-time-slot/:timeSlot', component: ReserveTimeSlotDetailsComponent},
    { path: 'course/:id/reserve-time-slot', component: ReserveTimeSlotComponent },
    { path: 'course/:id', component: CourseDetailsComponent },
    { path: 'course', component: CourseComponent },
    { path: 'cart', component: CartDetailsComponent },
    { path: 'checkout', canActivate: [AuthGuard], component: CheckoutComponent },
    { path: 'not-found', component: ErrorComponent },
    { path: 'account', canActivate: [AuthGuard], component: ProfileComponent },
    { path: 'account/enrolled-courses', canActivate: [AuthGuard], component: EnrolledCoursesComponent },
    { path: 'account/orders', canActivate: [AuthGuard], component: OrdersComponent },
    { path: 'account/time-slots', canActivate: [AuthGuard], component: StudentTimeSlotsComponent },
    { path: 'teaching', canActivate: [AuthGuard], component: TeachingComponent },
    { path: 'teaching/course', canActivate: [AuthGuard], component: TeacherCoursesComponent },
    { path: 'teaching/course/new', canActivate: [AuthGuard], component: CourseAddComponent },
    { path: 'teaching/time-slots', canActivate: [AuthGuard], component: TeacherTimeSlotsComponent },
    { path: 'teaching/time-slots/new', canActivate: [AuthGuard], component: TimeSlotAddComponent },
    { path: 'teaching/time-slots/:id', canActivate: [AuthGuard], component: TimeSlotDetailsComponent },
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: 'not-found' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
