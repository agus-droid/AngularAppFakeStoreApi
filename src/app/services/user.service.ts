import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = 'https://fakestoreapi.com/auth/login';

  //No hay forma de traerse el usuario logueado, por lo que se usa uno hardcodeado
  private API_URL_GET_USER = 'https://fakestoreapi.com/users/2';

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) { }

  login(user: User): Observable<any> {
    return this.http.post(this.API_URL, user);
  }

  setToken(token: string): void {
    this.cookies.set('token', token);
  }

  getToken(): string {
    return this.cookies.get('token');
  }

  getUserLogged(){
    const token = this.getToken();

    //Acá se debe hacer una llamada a la API para traerse el usuario logueado, pero por ahora se usa uno hardcodeado
    return this.http.get(this.API_URL_GET_USER);
  }

}
