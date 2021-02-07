import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  template: `
  <div class="main-content">
    <div class="section-content section-content-p30">
      <div class="container-fluid">
          <router-outlet></router-outlet>
      </div>
    </div>
  </div>`,
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

}
