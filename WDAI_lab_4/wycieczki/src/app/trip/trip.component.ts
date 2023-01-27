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
    description: "",
    image: ""
  }
  @Input() index: number = 0;
  @Output() counterek: EventEmitter<number> = new EventEmitter<number>();
  @Output() outputIndex: EventEmitter<number> = new EventEmitter<number>();

  
  starNumber: number = 0;
  rating: number = 0;
  licznik: number = 0;


  ngOnInit(): void{
    this.licznik = this.singleTrip.capacity;
  }

  light(indeks: number){
    if(this.rating==0){
      this.starNumber = indeks
    }
  }

  rate(indeks: number){
    this.rating = indeks
  }

  dodaj(): void{
    this.licznik += 1;
    this.counterek.emit(-1)
    this.service.removeTrip(this.singleTrip.name)
  }

  odejmij(): void{
    this.licznik -=1;
    this.counterek.emit(1)
    this.service.addTrip(this.singleTrip.name, this.singleTrip.price);
  }

  remove(): void{
    this.counterek.emit(this.licznik - this.singleTrip.capacity);
    this.outputIndex.emit(this.index);
    this.service.removeAllTrips(this.singleTrip.name);
  }
  

}
