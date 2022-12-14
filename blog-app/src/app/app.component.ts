import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog-app';

  constructor(
    public loginService: LoginService,
    public postsService: PostsService
  ) {}
}
