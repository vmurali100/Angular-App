export interface Excercise{
    id:string;
    name:string;
    duration:number;
    calories:number;
    dat?:Date;
    state?:'completed' | 'cancelled'| null;
}