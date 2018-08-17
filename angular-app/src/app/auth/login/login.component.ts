import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
