import { Component, OnInit, Input } from '@angular/core';
import { TripInfo } from '../TripInfo';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {
@Input() selectedTrip: TripInfo;
  constructor() { }

  ngOnInit() {
  }

}
