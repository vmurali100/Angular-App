import { Excercise } from "./excercise.model";
import { Subject } from "rxjs";

export class TrainingServices{
    availableExcercises:Excercise [] = [
        {id:'crunches',name:'Crunches',duration:30,calories:8},
        {id:'touch-toes',name:'Touch Toes',duration:180,calories:15},
        {id:'side-lunges',name:'Side Lunges',duration:120,calories:18},
        {id:'burpees',name:'Burpees',duration:60,calories:8}
    ]
    private runningExcercise : Excercise;
    excerciseChanged = new Subject<Excercise>();
    private excercises  = [] 
    getAvailableExcercises(){
        return this.availableExcercises.slice()
    }
    startExcercise(selectedId:string){
        this.runningExcercise = this.availableExcercises.find(ex=>ex.id===selectedId)
        this.excerciseChanged.next({...this.runningExcercise})
    }
    completeExcercise(){
        this.excercises.push({...this.runningExcercise, date:new Date() , state :'completed'})
        this.runningExcercise= null;
        this.excerciseChanged.next(null)
    }
    cancelExcercise(progress:number){
        this.excercises.push({
            ...this.runningExcercise, 
            date:new Date() ,
            duration: this.runningExcercise.duration * (progress/100),
            calalories: this.runningExcercise.calories * (progress/100), 
            state :'completed'})
        this.runningExcercise= null;
        this.excerciseChanged.next(null)
    }
    getRunningExcercise(){
        return {...this.runningExcercise }
    }
    getCompleteOrCancelledExcercises(){
        return this.excercises.slice()
    }
}