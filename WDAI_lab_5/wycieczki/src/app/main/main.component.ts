import { Component } from '@angular/core';
import { max } from 'rxjs';
import { ITrip } from '../model/itrip';
import { ReadDataService } from '../read-data.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  tripList;
  constructor(service: ReadDataService){
    this.tripList = service.getTrips();
  }
} 
