import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Excercise } from '../excercise.model';
import { TrainingServices } from '../training.services';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit , AfterViewInit{
  @ViewChild(MatSort) sort :MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns =['date','name','duration','calories','state']
  dataSource = new MatTableDataSource<Excercise>()
  constructor(private trainingService:TrainingServices) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompleteOrCancelledExcercises()
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator= this.paginator
  }
  doFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
}
