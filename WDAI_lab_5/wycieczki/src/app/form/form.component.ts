import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITrip } from '../model/itrip';
import { ReadDataService } from '../read-data.service';

const date = new Date();
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  tripList;
  service;
  constructor(service: ReadDataService){
    this.service = service;
    this.tripList = service.getTrips().map((trip: ITrip)=>{
      return trip.image
    })
  }
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
    images: ["", "", "", ""]
  }

  validData: boolean = true
  validToday: boolean = true
  addTrip(): void{
    let start: string[] = this.trip.start.split("-");
    let end: string[] = this.trip.end.split("-");
    this.trip.start = `${start[2]}-${start[1]}-${start[0]}`
    this.trip.end = `${end[2]}-${end[1]}-${end[0]}`
    if((+start[0] > +end[0]) || (+start[0]==+end[0] && +start[1] > +end[1]) || (+start[0]==+end[0] && +start[1]==+end[1] && +start[2]>+end[2])){
      this.validData = false
      this.validToday = true
    }
    else if((+start[0] < date.getFullYear()) || (+start[0]==date.getFullYear() && +start[1] < date.getMonth()+1) || (+start[0]==date.getFullYear() && +start[1]==(date.getMonth()+1) && +start[2]<date.getDate())){
      this.validToday = false
    }
    else{
      this.service.addTrip(this.trip);
      this.trip = {
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
        images: ["", "", "", ""]
      }
      this.validData = true
      this.validToday = true
    }
  }
}
