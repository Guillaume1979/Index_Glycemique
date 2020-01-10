import { Injectable } from '@angular/core';
import { CalculatedData } from './calculated-data';

@Injectable({
  providedIn: 'root'
})
export class PortionService {

  portionList:CalculatedData[]=[];

  chargeTotale:number=0;

  constructor() {
   }

   calculationCarbs(weight,carbs){
    return weight*carbs/100;
   
  }

  calculationGlycemicIndex(ig,carbsProportion){
    return ig*carbsProportion/100;
  }
}
