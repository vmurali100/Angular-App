import { Component, OnInit} from '@angular/core';
import { TrainingServices } from '../training.services';
import { Excercise } from '../excercise.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  excercises : Excercise [] = [];
  constructor(private trainingService:TrainingServices) { }

  ngOnInit() {
    this.excercises = this.trainingService.getAvailableExcercises()
  }
  onStartTrining(form:NgForm){
    this.trainingService.startExcercise(form.value.excercise)
  }
}
