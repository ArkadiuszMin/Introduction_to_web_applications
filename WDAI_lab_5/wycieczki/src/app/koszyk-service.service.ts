import { EventEmitter, Injectable, Output } from '@angular/core';
import { ITrip } from './model/itrip';

type wycieczka = {
  trip: ITrip,
  quantity: number,
  price: number,
  fullPrice: number
}

type dataPack = {
  wycieczki: Array<wycieczka>,
  price: number,
  quantity: number
}

type bought = {
  trip: wycieczka,
  status: string
}

const date = new Date();

@Injectable({
  providedIn: 'root'
})
export class KoszykServiceService {

  constructor() { }

  dane: dataPack = {
    wycieczki: [],
    price: 0,
    quantity: 0
  }
  @Output() nextTripChanged: EventEmitter<string> = new EventEmitter<string>();
  kupione: Array<bought> = [];

  nextTrip: string = "brak"

  getWycieczki(): dataPack{
    return this.dane;
  }

  getKupione(): Array<bought>{
    return this.kupione;
  }

  dateComperator(a: bought, b:bought){
    let date1 = a.trip.trip.start
    let date2 = b.trip.trip.start
    let start1 = date1.split("-")
    let start2 = date2.split("-")
    if(+start1[2] < +start2[2] || +start1[2] == +start2[2] && +start1[1] < +start2[1] || +start1[2] == +start2[2] && +start1[1] == +start2[1] && +start1[0] < +start2[0]){
      return -1
    }
    else{
      return 1
    }
  }

  findEarliest(): void{
    let earliest: string = this.kupione[0].trip.trip.start
    for(let i =0; i<this.kupione.length-1; i++){
      let start = this.kupione[i+1].trip.trip.start.split("-")
      if(this.dateComperator(this.kupione[i+1], this.kupione[i]) && ((+start[2] > date.getFullYear()) || (+start[2]==date.getFullYear() && +start[1] > date.getMonth()+1) || (+start[2]==date.getFullYear() && +start[1]==(date.getMonth()+1) && +start[0]>date.getDate()))){
        earliest = this.kupione[i+1].trip.trip.start
      }
    }
    let start = earliest.split("-")
    if(((+start[2] > date.getFullYear()) || (+start[2]==date.getFullYear() && +start[1] > date.getMonth()+1) || (+start[2]==date.getFullYear() && +start[1]==(date.getMonth()+1) && +start[0]>date.getDate()))){
      this.nextTrip = earliest
    }
    this.nextTripChanged.emit(this.nextTrip)
  }

  addTrip(trip: ITrip, price: number): void{
    let flag: boolean = false
    this.dane.wycieczki.forEach(element => {
      if(element.trip.name == trip.name){
        element.quantity += 1
        element.fullPrice += element.price
        flag = true
      }
    });
    if(!flag){
      this.dane.wycieczki.push({
        trip: trip,
        quantity: 1,
        price: price,
        fullPrice: price
      })
    }
    this.dane.price += price;
    this.dane.quantity += 1;
  }

  removeTrip(trip: ITrip): void{
    for(let i = 0; i<this.dane.wycieczki.length; i++){
      if(this.dane.wycieczki[i].trip.name == trip.name){
        this.dane.wycieczki[i].quantity -= 1
        this.dane.wycieczki[i].fullPrice -= this.dane.wycieczki[i].price
        this.dane.price -= this.dane.wycieczki[i].price;
        this.dane.quantity-=1;
        if (this.dane.wycieczki[i].quantity == 0){
          this.dane.wycieczki.splice(i, 1)
        }
      }
    }
  }

  removeAllTrips(trip: ITrip): void{
    for(let i = 0; i<this.dane.wycieczki.length; i++){
      if(this.dane.wycieczki[i].trip.name == trip.name){
        this.dane.quantity -= this.dane.wycieczki[i].quantity
        this.dane.price -= this.dane.wycieczki[i].price*this.dane.wycieczki[i].quantity
        this.dane.wycieczki.splice(i, 1)
      }
    }
  }

  kup(indeks: number): void{
    let status: string = ""
    let trip: ITrip = this.dane.wycieczki[indeks].trip;
    let start: Array<string> = trip.start.split("-")
    let end: Array<string> = trip.end.split("-")
    console.log(start)
    if((+start[2] > date.getFullYear()) || (+start[2]==date.getFullYear() && +start[1] > date.getMonth()+1) || (+start[2]==date.getFullYear() && +start[1]==(date.getMonth()+1) && +start[0]>date.getDate())){
      status = "Przed"
    }
    else if((+end[2] < date.getFullYear()) || (+end[2]==date.getFullYear() && +end[1] < date.getMonth()+1) || (+end[2]==date.getFullYear() && +end[1]==(date.getMonth()+1) && +end[0]<date.getDate())){
      status = "Zakończona"
    }
    else{
      status = "W trakcie"
    }
    let kupiona: bought = {
      trip: this.dane.wycieczki[indeks],
      status: status
    }
    this.kupione.push(kupiona);
    this.removeAllTrips(this.dane.wycieczki[indeks].trip);
    this.findEarliest();
  }
}
