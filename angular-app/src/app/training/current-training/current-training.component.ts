import { Component, OnInit , EventEmitter,Output} from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component'
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress=0;
  timer;
  @Output() trainingExit = new EventEmitter<void>()
  constructor( private dailog:MatDialog) { }

  ngOnInit() {
    this.startOrResumeTimer()
  }
  startOrResumeTimer(){
    this.timer = setInterval(() => {
      this.progress = this.progress+10;

      if(this.progress>=100){
        clearInterval(this.timer)
      }
    }, 500);
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
        this.trainingExit.emit()
      }else{
        this.startOrResumeTimer()
      }
    })
  }
}
