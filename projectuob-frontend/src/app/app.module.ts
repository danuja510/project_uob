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
    CartComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
