import { Injectable } from '@angular/core';

type wycieczka = {
  name: string,
  quantity: number,
  price: number
}

type dataPack = {
  wycieczki: Array<wycieczka>,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class KoszykServiceService {

  constructor() { }

  dane: dataPack = {
    wycieczki: [],
    price: 0
  } 


  getWycieczki(): dataPack{
    return this.dane;
  }

  addTrip(name: string, price: number): void{
    let flag: boolean = false
    this.dane.wycieczki.forEach(element => {
      if(element.name == name){
        element.quantity += 1
        flag = true
      }
    });
    if(!flag){
      this.dane.wycieczki.push({
        name: name,
        quantity: 1,
        price: price
      })
    }
    this.dane.price += price;
  }

  removeTrip(name: string): void{
    for(let i = 0; i<this.dane.wycieczki.length; i++){
      if(this.dane.wycieczki[i].name == name){
        this.dane.wycieczki[i].quantity -= 1
        this.dane.price -= this.dane.wycieczki[i].price;
        if (this.dane.wycieczki[i].quantity == 0){
          this.dane.wycieczki.splice(i, 1)
        }
      }
    }
  }

  removeAllTrips(name: string): void{
    for(let i = 0; i<this.dane.wycieczki.length; i++){
      if(this.dane.wycieczki[i].name == name){
        this.dane.price -= this.dane.wycieczki[i].price*this.dane.wycieczki[i].quantity
        this.dane.wycieczki.splice(i, 1)
      }
    }
  }
}
