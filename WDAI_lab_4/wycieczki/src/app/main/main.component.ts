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
  counter: number = 0;
  highestPrice: number = 0;
  lowestPrice: number =0;
  form: boolean = false;
  
  ngOnInit(): void{
    this.findExtremes();
  }
  findExtremes(): void{
    let prices: Array<number> = this.tripList.map((trip: ITrip) => {
      return trip.price
    })
    this.highestPrice = Math.max(...prices);
    this.lowestPrice = Math.min(...prices);
  }

  changeCounter(oIle: number): void{
    this.counter+=oIle;
  }

  remove(index: number): void{
    this.tripList.splice(index, 1);
    this.findExtremes();
  }

  changeForm(): void{
    this.form = true;
  }

  addTrip(trip: ITrip): void{
    this.tripList.push(trip)
    this.form = !this.form
    this.findExtremes();
  }
} 
