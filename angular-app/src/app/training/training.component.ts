import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrainingServices } from './training.services';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onGoingTraining = false;
  excerciseSubscription:Subscription;
  constructor( private trainingService:TrainingServices) { }

  ngOnInit() {
    this.excerciseSubscription = this.trainingService.excerciseChanged.subscribe(excercise=>{
      if(excercise){
        this.onGoingTraining = true ;
      }else{
        this.onGoingTraining = false ;
      }
    })
  }

}
