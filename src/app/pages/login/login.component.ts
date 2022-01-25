import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User("", "");

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit");
    console.log(this.user)
  }

}
