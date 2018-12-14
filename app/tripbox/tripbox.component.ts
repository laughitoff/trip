import { Component, OnInit } from '@angular/core';
import { TripInfos } from '../TripInfos-mockup';
import { TripInfo } from '../TripInfo';

@Component({
  selector: 'app-tripbox',
  templateUrl: './tripbox.component.html',
  styleUrls: ['./tripbox.component.css']
})
export class TripboxComponent implements OnInit {
trips = TripInfos;
selectedTrip = {tripDate:"2018-01-01" , tripVehicle:"大巴" , tripAss:"大堂" , tripTime:"2:00-1" , tripPlace:"海边" };
getTrip(trip: TripInfo): void {
  this.selectedTrip = trip;
}

  constructor() { }

  ngOnInit() {
  }

}
