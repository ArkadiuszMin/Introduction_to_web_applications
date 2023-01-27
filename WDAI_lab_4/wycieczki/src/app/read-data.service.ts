import { Injectable } from '@angular/core';
import TripJson from '../assets/trip.json';
import { ITrip } from '../app/model/itrip';
import { ITripsData } from '../app/model/itrips-data';


@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  trips: ITripsData = TripJson;
  tripList: Array<ITrip> = this.trips.tripsData;

  getTrips(): Array<ITrip>{
    return this.tripList;
  }

  constructor() { }
}
