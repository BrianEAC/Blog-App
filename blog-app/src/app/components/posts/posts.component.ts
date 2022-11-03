import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  private user?: User;
  public posts: Post[] = [];

  constructor(private postsService: PostsService, public loginService: LoginService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    if (this.user && this.user!.isEditor) {
      this.postsService
        .getPendingPosts()
        .subscribe((pendingPosts) => (this.posts = pendingPosts));
    }
    else this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  getPendingPosts(): void {
    this.postsService
      .getPendingPosts()
      .subscribe((pendingPosts) => (this.posts = pendingPosts));
  }

  getPostsByUser(username: string): void {
    this.postsService
      .getPostsByUser(username)
      .subscribe((userPosts) => (this.posts = userPosts));
  }

  deletePost(id: number): void {
    this.postsService.deletePost(id).subscribe(() => this.getPosts());
  }

  getUser(): void {
    this.user = this.loginService.getUser();
  }


  
  
}
