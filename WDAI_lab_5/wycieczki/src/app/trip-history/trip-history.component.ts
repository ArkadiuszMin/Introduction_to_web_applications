import { Component } from '@angular/core';
import { KoszykServiceService } from '../koszyk-service.service';

@Component({
  selector: 'app-trip-history',
  templateUrl: './trip-history.component.html',
  styleUrls: ['./trip-history.component.scss']
})
export class TripHistoryComponent {
  kupione;
  constructor(service: KoszykServiceService){
    this.kupione=service.getKupione();
  }

  choosenStatus: string = "";

  date: Date = new Date();
  data:string = `${this.date.getDate()}-${this.date.getMonth()+1}-${this.date.getFullYear()}`;

  filter(event: any): void{
    this.choosenStatus = event.target.value
  }
}
