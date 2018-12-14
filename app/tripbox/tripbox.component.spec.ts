import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripboxComponent } from './tripbox.component';

describe('TripboxComponent', () => {
  let component: TripboxComponent;
  let fixture: ComponentFixture<TripboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
