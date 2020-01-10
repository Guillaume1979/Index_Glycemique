import { Component,OnInit } from '@angular/core';
import { AlimentsService } from '../aliments.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-aliments-list',
  templateUrl: './aliments-list.component.html',
  styleUrls: ['./aliments-list.component.css']
})
export class AlimentsListComponent implements OnInit {

  alimentsList;
  addAlimentForm;

  constructor(private alimentsService: AlimentsService, private formBuilder: FormBuilder) {
    this.alimentsList = this.alimentsService.aliments;
    this.addAlimentForm = this.formBuilder.group({
      ig: '0',
      carbs: '0',
      name: ''
    })
  }

  ngOnInit() {}

  onSubmit(newAliment) {
    if (newAliment.name) {
      this.alimentsList.push(newAliment);
      console.log("Nouvel ajout");
      this.clearForm();
    };

  }

  clearForm() {
    this.addAlimentForm.patchValue({
      ig: '0',
      carbs: '0',
      name: ''
    });
  }

  supprAliment(index) {
    if (index!=-1){
    this.alimentsList.splice(index,1);
    }
  }

  sortBy(){

  }

}
