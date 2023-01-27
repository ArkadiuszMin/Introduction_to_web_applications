import { Component } from '@angular/core';
import { ReadDataService } from '../read-data.service';
import { KoszykServiceService } from './../koszyk-service.service'


@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent {
  serviceTrips;
  serviceKoszyk;
  dane;
  trips;

  constructor(serviceKoszyk: KoszykServiceService, serviceTrips: ReadDataService){
    this.serviceTrips = serviceTrips;
    this.serviceKoszyk = serviceKoszyk;
    this.dane = serviceKoszyk.getWycieczki();
    this.trips = this.dane.wycieczki;
  }

  kup(indeks: number): void{
    this.serviceTrips.changeCapacity(this.trips[indeks])
    this.serviceKoszyk.kup(indeks);
  }

}
