import { Component } from '@angular/core';
import { KoszykServiceService } from './../koszyk-service.service'


@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent {
  dane;
  trips;

  constructor(service: KoszykServiceService){
    this.dane = service.getWycieczki();
    this.trips = this.dane.wycieczki;
  }

}
