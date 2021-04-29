import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StarRatingComponent} from './star-rating.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {RatedStarsComponent} from './rated-stars/rated-stars.component';



@NgModule({
  declarations: [
    StarRatingComponent,
    RatedStarsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ], exports: [
    StarRatingComponent,
    RatedStarsComponent
  ]
})
export class StarRatingModule { }
