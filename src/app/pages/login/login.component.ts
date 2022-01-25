import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
    ngForm: NgForm;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit");
  }

}