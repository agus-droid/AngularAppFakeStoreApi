import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.login(this.user).subscribe({
      next: (data: any) => {
        this.toastr.success('Login successful', 'Success');
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/').then(() => {
          window.location.reload()
        });
      },
      error: () => {
        this.toastr.error('Username or password is incorrect', 'Error');
      }

    })
  }

}
