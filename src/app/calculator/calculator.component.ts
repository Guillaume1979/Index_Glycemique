import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { AlimentsService } from '../aliments.service';
import { PortionService } from '../portion.service';
import { CalculatedData } from '../calculated-data';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  alimentsList = this.alimentsService.aliments;
  portionForm = this.formBuilder.group({
    aliment:'',
    weight:''
  });

  portionList = this.portionService.portionList;
  totalCharge = this.portionService.chargeTotale;
  
  constructor(private formBuilder : FormBuilder, private alimentsService : AlimentsService, private portionService : PortionService) { 
    

  }

  ngOnInit() {
  }

  onSubmit(formValue){
    if(formValue.aliment){
      let data = {} as CalculatedData;
      data.name  = formValue.aliment.name;
      data.ig = formValue.aliment.ig;
      data.carbsProportion = this.portionService.calculationCarbs(formValue.weight,formValue.aliment.carbs);
      data.glycemicIndex = this.portionService.calculationGlycemicIndex(formValue.aliment.ig,data.carbsProportion);
      this.portionList.push(data);
      this.totalChargeCalc(data.glycemicIndex);

      this.clearForm();
    }
  }

  clearForm() {
    this.portionForm.patchValue({
      aliment:'',
      weight:''
    });
  }

  supprPortion(index) {
    if (index!=-1){
    this.portionList.splice(index,1);
    }
  }

  totalChargeCalc(glycemicIndex){
    if (!this.totalCharge){
      this.totalCharge=0;
    }
    this.totalCharge+=glycemicIndex;     
  }
  

}
