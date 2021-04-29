import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedStarsComponent } from './rated-stars.component';

describe('RatedStarsComponent', () => {
  let component: RatedStarsComponent;
  let fixture: ComponentFixture<RatedStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
