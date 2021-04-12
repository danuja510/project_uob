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
    HomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [{provide: OKTA_CONFIG, useValue: oktaConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
