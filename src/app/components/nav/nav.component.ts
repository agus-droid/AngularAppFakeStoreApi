import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isCollapsed: boolean;
  public user: User = new User();

  constructor(
    private userService: UserService,
    private cookies: CookieService,
    private toastr: ToastrService
  ) {
    this.isCollapsed = true
  }

  ngOnInit(): void {
    if (this.isLogged()) {
      this.getUserLogged();
    }
  }

  isLogged(): boolean {
    return this.cookies.check('token');
  }

  logout() {
    this.userService.logout();
    this.toastr.success('Logout successful', 'Success');

  }

  getUserLogged() {
    this.userService.getUserLogged().subscribe({
      next: (user: any) => {
        this.user = user;
      },
      error: () => {
        console.log('Error');
      }
    });
  }

}
