import { Component, OnInit } from '@angular/core';
import {SubjectsService} from '../../../services/backend/subjects.service';
import {Subject} from '../../../shared/subjects.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public subjects: Subject[];

  constructor(private subjectService: SubjectsService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      data => {
        this.subjects = data;
      }
    );
  }

}
