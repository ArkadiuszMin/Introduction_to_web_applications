import { Component } from '@angular/core';
import { max } from 'rxjs';
import { ITrip } from '../model/itrip';
import { ReadDataService } from '../read-data.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent {
  tripList;
  service;
  constructor(service: ReadDataService){
    this.service = service
    this.tripList = service.getTrips();
  }
  highestPrice: number = 0;
  lowestPrice: number =0;

  ngOnInit(): void{
    this.service.findExtremes();
    this.highestPrice = this.service.setHighestPrice();
    this.lowestPrice = this.service.setLowestPrice();
  }

  remove(index: number): void{
    this.tripList.splice(index, 1);
    this.service.findExtremes();
    this.highestPrice = this.service.setHighestPrice();
    this.lowestPrice = this.service.setLowestPrice();
  }
}
