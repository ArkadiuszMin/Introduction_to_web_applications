import { Component } from '@angular/core';
import Carsjson from '../../assets/cars.json';
import {ICars} from '../model/icars'
import {ICar} from '../model/icar'
import {IModel} from '../model/imodel'
@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.scss']
})
export class CarSelectorComponent {
  cars: ICars = Carsjson;
  carsList: Array<ICar> = this.cars.cars;
  currentCar: ICar = {
    brand: "",
    models: []
  }
  currentModel: IModel = {
    model: "",
    color: [],
    description: ""
  }
  currentColor: string = "";

  ChoosenBrand(event: any): void{
    this.currentCar = this.carsList[event.target.value];
    this.currentModel = {
      model: "",
      color: [],
      description: ""
    }
    this.currentColor = ""
  }

  ChoosenModel(event: any): void{
    this.currentModel = this.currentCar.models[event.target.value];
    this.currentColor= ""
  }

  ChoosenColor(event: any): void{
     this.currentColor = event.target.value
  }
}