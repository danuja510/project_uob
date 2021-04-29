import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rated-stars',
  templateUrl: './rated-stars.component.html',
  styleUrls: ['./rated-stars.component.css']
})
export class RatedStarsComponent implements OnInit {

  @Input('rating') rating: number;

  stars = [
    {
      id: 1,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 2,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 3,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 4,
      icon: 'star',
      class: 'star-gray star-hover star'
    },
    {
      id: 5,
      icon: 'star',
      class: 'star-gray star-hover star'
    }

  ];

  constructor() { }

  ngOnInit(): void {
    this.stars.filter( (star) => {

      if ( star.id <= this.rating){
        star.class = 'star-gold star';
      }else{
        star.class = 'star-gray star';
      }
      return star;
    });
  }

}
