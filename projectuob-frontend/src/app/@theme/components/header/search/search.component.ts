import {Component, ElementRef, OnInit} from '@angular/core';
import {CoursesService} from '../../../../services/backend/courses.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(searchString: string): void {
    this.router.navigate([this.route.snapshot.url], {relativeTo: this.route, queryParams: {search: searchString}});
  }
}
