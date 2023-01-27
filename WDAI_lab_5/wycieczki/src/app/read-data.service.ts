import { Injectable } from '@angular/core';
import TripJson from '../assets/trip.json';
import { ITrip } from '../app/model/itrip';
import { ITripsData } from '../app/model/itrips-data';

type wycieczka = {
  trip: ITrip,
  quantity: number,
  price: number,
  fullPrice: number
}

@Injectable({
  providedIn: 'root'
})
export class ReadDataService {
  trips: ITripsData = TripJson;
  tripList: Array<ITrip> = this.trips.tripsData;
  highestPrice: number = 0;
  lowestPrice: number=0;

  setHighestPrice(): number{
    return this.highestPrice;
  }

  setLowestPrice(): number{
    return this.lowestPrice
  }

  getTrips(): Array<ITrip>{
    return this.tripList;
  }

  addTrip(trip: ITrip): void{
    this.tripList.push(trip)
    this.findExtremes();
  }

  findExtremes(): void{
    let prices: Array<number> = this.tripList.map((trip: ITrip) => {
      return trip.price
    })
    this.highestPrice = Math.max(...prices);
    this.lowestPrice = Math.min(...prices);
  }

  changeCapacity(wycieczka: wycieczka): void{
    let trip: ITrip = wycieczka.trip
    this.tripList.forEach(element => {
      if(trip == element){
        element.capacity -= wycieczka.quantity;
        element.taken = 0;
      }
    });
  }

  constructor() { }
}
