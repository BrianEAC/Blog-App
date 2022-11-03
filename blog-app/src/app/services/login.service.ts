import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private user?: User;
  public loggedIn = false;
  
  login() {
    this.loggedIn = true;
  }

  logout(){
    this.user = undefined;
    this.loggedIn = false;
  }

  getUser(): User | undefined {
    return this.user ? this.user : undefined;
  }

  setUser(user: User) {
    this.user = user;
    this.login();
  }

  authenticate(username: string, password: string) {
    return this.http.get(`${environment.urlPosts}?username_like=${username}&password_like${password}`);
  }





  //***** funcion agregada para simplificar el cambio de rol ***** 
  switchEditor() {
    this.user ? this.user.isEditor = !this.user.isEditor : alert("not logged in");
  }

}
