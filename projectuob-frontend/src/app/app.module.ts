import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './pages/masters/teacher/teacher.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ErrorComponent } from './pages/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { TeacherAddComponent } from './pages/masters/teacher/teacher-add/teacher-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from './pages/masters/teacher/teacher-list/teacher-list.component';
import { CourseComponent } from './pages/masters/course/course.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { SidebarComponent } from './@theme/components/sidebar/sidebar.component';
import { FooterComponent } from './@theme/components/footer/footer.component';
import { SearchComponent } from './@theme/components/header/search/search.component';
import { TeacherDetailsComponent } from './pages/masters/teacher/teacher-details/teacher-details.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './@theme/components/header/cart-status/cart-status.component';
import { CartComponent } from './pages/components/cart/cart.component';
import { CartDetailsComponent } from './pages/components/cart/cart-details/cart-details.component';
import { CourseDetailsComponent } from './pages/masters/course/course-details/course-details.component';
import { CheckoutComponent } from './pages/components/checkout/checkout.component';
import { StudentComponent } from './pages/masters/student/student.component';
import { LoginComponent } from './pages/components/login/login.component';
import { LoginStatusComponent } from './@theme/components/header/login-status/login-status.component';
import {
  OKTA_CONFIG,
  OktaAuthModule,
} from '@okta/okta-angular';
import AppConfig from './config/app-config';
import {Router} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {StarRatingModule} from './pages/components/star-rating/star-rating.module';
import { TeachingComponent } from './pages/teaching/teaching.component';
import {AuthGuard} from './auth-guard.service';
import { TeacherCoursesComponent } from './pages/teaching/teacher-courses/teacher-courses.component';
import { CourseAddComponent } from './pages/masters/course/course-add/course-add.component';
import { TeacherTimeSlotsComponent } from './pages/teaching/teacher-time-slots/teacher-time-slots.component';
import { TimeSlotAddComponent } from './pages/teaching/teacher-time-slots/time-slot-add/time-slot-add.component';
import { TimeSlotDetailsComponent } from './pages/teaching/teacher-time-slots/time-slot-details/time-slot-details.component';
import { StudentCourseEnrollmentsComponent } from './pages/masters/student/student-course-enrollments/student-course-enrollments.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EnrolledCoursesComponent } from './pages/profile/enrolled-courses/enrolled-courses.component';
import { OrdersComponent } from './pages/profile/orders/orders.component';
import { StudentTimeSlotsComponent } from './pages/profile/student-time-slots/student-time-slots.component';
import { ReserveTimeSlotComponent } from './pages/components/reserve-time-slot/reserve-time-slot.component';
import { ReserveTimeSlotDetailsComponent } from './pages/components/reserve-time-slot/reserve-time-slot-details/reserve-time-slot-details.component';

const oktaConfig = Object.assign({
  onAuthRequired: (injector) => {
    const router = injector.get(Router);

    router.navigate(['/login']);
  }
}, AppConfig.oidc);

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    NotFoundComponent,
    ErrorComponent,
    TeacherAddComponent,
    TeacherListComponent,
    CourseComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SearchComponent,
    TeacherDetailsComponent,
    CartStatusComponent,
    CartComponent,
    CartDetailsComponent,
    CourseDetailsComponent,
    CheckoutComponent,
    StudentComponent,
    LoginComponent,
    LoginStatusComponent,
    HomeComponent,
    TeachingComponent,
    TeacherCoursesComponent,
    CourseAddComponent,
    TeacherTimeSlotsComponent,
    TimeSlotAddComponent,
    TimeSlotDetailsComponent,
    StudentCourseEnrollmentsComponent,
    ProfileComponent,
    EnrolledCoursesComponent,
    OrdersComponent,
    StudentTimeSlotsComponent,
    ReserveTimeSlotComponent,
    ReserveTimeSlotDetailsComponent],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OktaAuthModule,
    StarRatingModule
  ],
  providers: [{provide: OKTA_CONFIG, useValue: oktaConfig}, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
