import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTimeSlotComponent } from './reserve-time-slot.component';

describe('ReserveTimeSlotComponent', () => {
  let component: ReserveTimeSlotComponent;
  let fixture: ComponentFixture<ReserveTimeSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveTimeSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTimeSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
