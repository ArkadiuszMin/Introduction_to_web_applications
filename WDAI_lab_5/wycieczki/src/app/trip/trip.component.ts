import { Interpolation } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { single } from 'rxjs';
import { ITrip } from '../model/itrip';
import { KoszykServiceService } from '../koszyk-service.service';




@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})


export class TripComponent {
  service;
  constructor(service: KoszykServiceService) {
    this.service = service;
  }
  @Input() singleTrip: ITrip = {
    name: "",
    country: "",
    start: "",
    end: "",
    price: 0,
    capacity: 0,
    taken: 0,
    description: "",
    image: "",
    rating: 0,
    ratingNumber: 0,
    opinions: [],
    images: []
  }
  @Input() index: number = 0;
  @Output() outputIndex: EventEmitter<number> = new EventEmitter<number>();

  licznik: number = 0;


  ngOnInit(): void{
    this.licznik = this.singleTrip.capacity - this.singleTrip.taken; 
  }

  dodaj(): void{
    this.singleTrip.taken -=1;
    this.licznik += 1;
    this.service.removeTrip(this.singleTrip)
  }

  odejmij(): void{
    this.singleTrip.taken +=1;
    this.licznik -= 1;
    this.service.addTrip(this.singleTrip, this.singleTrip.price);
  }

  remove(): void{
    this.outputIndex.emit(this.index);
    this.service.removeAllTrips(this.singleTrip);
  }
  

}
