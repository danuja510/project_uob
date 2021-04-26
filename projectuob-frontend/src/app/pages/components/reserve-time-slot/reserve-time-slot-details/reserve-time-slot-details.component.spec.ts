import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTimeSlotDetailsComponent } from './reserve-time-slot-details.component';

describe('ReserveTimeSlotDetailsComponent', () => {
  let component: ReserveTimeSlotDetailsComponent;
  let fixture: ComponentFixture<ReserveTimeSlotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTimeSlotDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTimeSlotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
