import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'angular-app';
  maxDate
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  onSubmit(form:NgForm){
    console.log(form.value)
  }
  ngOnInit(){
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }
}
