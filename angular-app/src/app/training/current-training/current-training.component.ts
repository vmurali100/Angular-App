import { Component, OnInit , EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component'
import { TrainingServices } from '../training.services';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress=0;
  timer;
  @Output() trainingExit = new EventEmitter<void>()
  constructor( private dailog:MatDialog,
              private trainingService:TrainingServices) { }

  ngOnInit() {
    this.startOrResumeTimer()
  }
  startOrResumeTimer(){
    const value = this.trainingService.getRunningExcercise().duration;
    const step = value / 100 * 1000;
    console.log(step)
    this.timer = setInterval(() => {
      this.progress = this.progress+10;

      if(this.progress>=100){
        this.trainingService.completeExcercise() 
     }
    }, step);
  }
  onStop(){
    clearInterval(this.timer);
    const dialogRef = this.dailog.open(StopTrainingComponent,{
      data:{
        progress:this.progress
      }
    })
    dialogRef.afterClosed().subscribe(res=>{
      if(res){
        this.trainingService.cancelExcercise(this.progress)
      }else{
        this.startOrResumeTimer()
      }
    })
  }
}
