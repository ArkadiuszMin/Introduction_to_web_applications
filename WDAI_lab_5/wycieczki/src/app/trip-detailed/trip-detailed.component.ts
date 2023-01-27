import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { KoszykServiceService } from '../koszyk-service.service';
import { ITrip } from '../model/itrip';
import { ReadDataService } from '../read-data.service';

@Component({
  selector: 'app-trip-detailed',
  templateUrl: './trip-detailed.component.html',
  styleUrls: ['./trip-detailed.component.scss']
})
export class TripDetailedComponent {

  serviceData;
  serviceKoszyk;
  constructor(private route: ActivatedRoute, serviceData: ReadDataService, serviceKoszyk: KoszykServiceService){
    this.serviceKoszyk = serviceKoszyk;
    this.serviceData = serviceData;
  };

  trip: ITrip = {
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
  id:number = 0;
  indeks: number = 0;

  private subscription: Subscription | undefined
    
  ngOnInit(): void{
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']
      this.trip = this.serviceData.getTrips()[this.id];
      this.licznik = this.trip.capacity - this.trip.taken; 
    })
  }

  starNumber: number = 0;
  rating: number = 0;
  licznik: number = 0;
  opinion: Array<string> = ["", "", ""];
  opinionFlag: boolean = true;

  turnLeft(): void{
    this.indeks -= 1
    if(this.indeks==-1){
      this.indeks=3
    }
  }

  turnRight(): void{
    this.indeks += 1
    if(this.indeks==4){
      this.indeks=0
    }
  }

  light(indeks: number){
    this.starNumber = indeks
  }

  rate(indeks: number){
    this.rating = indeks;
    this.trip.ratingNumber += 1;
    this.trip.rating = +((this.trip.rating*(this.trip.ratingNumber-1) + this.rating)/this.trip.ratingNumber).toFixed(2)
  }

  odejmij(): void{
    this.trip.taken +=1;
    this.licznik -= 1;
    this.serviceKoszyk.addTrip(this.trip, this.trip.price);
  }

  dodaj(): void{
    this.trip.taken -=1;
    this.licznik += 1;
    this.serviceKoszyk.removeTrip(this.trip)
  }

  addOpinion(): void{
    if(this.opinion[1].length > 500 || this.opinion[1].length < 50){
      this.opinionFlag = false;
    }
    else{
      this.trip.opinions.push(this.opinion);
      this.opinion = ["", "", ""];
      this.opinionFlag = true;
    }

  }
}
