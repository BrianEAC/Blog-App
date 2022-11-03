import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, public postsService: PostsService) { }

  public user?: User;
  public loggedIn = false;
  
  login() {
    this.loggedIn = true;
  }

  logout(){
    this.user = undefined;
    this.loggedIn = false;
    this.postsService.closePostForm();
    this.postsService.closeEditForm();
  }

  getUser(): User | undefined {
    return this.user ? this.user : undefined;
  }

  setUser(user: User) {
    this.user = user;
    this.login();
  }

  authenticate(username: string, password: string): Observable<User> {
    return this.http.get<User>(`${environment.urlUsers}?username=${username}&password=${password}`);
  }

}
