import { Component } from '@angular/core';
import { KoszykServiceService } from '../koszyk-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  service;
  dane;
  
  constructor(service: KoszykServiceService){
    this.dane = service.getWycieczki();
    this.service = service;
  }

  
  nextTrip: string = "Brak"
  showInfo: boolean = true

  ngOnInit(): void{
    this.service.nextTripChanged.subscribe((element)=>{
      this.nextTrip = element;
    })
  }

  info(): void{
    this.showInfo = !this.showInfo;
  }
}
