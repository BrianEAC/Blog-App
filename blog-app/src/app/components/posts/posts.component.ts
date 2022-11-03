import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';
import { PostComment } from 'src/app/interfaces/comment';

//COMPONENTE DE VISTA GENERAL DE POSTS

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  public user?: User;
  public posts: Post[] = [];
  public filteredPosts: boolean = false;
  public postOpened = false;
  @Input() postComment: string = '';
  public postModel: Post = {
    title: '',
    content: '',
    author: '',
    pending: true,
    id: 0,
    comments: [],
  };

  constructor(
    public postsService: PostsService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getApprovedPosts();
  }

  getAllPosts(): void {
    this.filteredPosts = false;
    if (this.user && this.user!.isEditor) {
      this.postsService
        .getPendingPosts()
        .subscribe((pendingPosts) => (this.posts = pendingPosts));
    } else
      this.postsService
        .getAllPosts()
        .subscribe((posts) => (this.posts = posts));
  }

  getPendingPosts(): void {
    this.filteredPosts = true;
    this.postsService
      .getPendingPosts()
      .subscribe((pendingPosts) => (this.posts = pendingPosts));
  }

  getPostsByUser(username: string): void {
    this.filteredPosts = true;
    this.postsService
      .getPostsByUser(username)
      .subscribe((userPosts) => (this.posts = userPosts));
  }

  getApprovedPosts(): void {
    this.filteredPosts = false;
    this.postsService
      .getApprovedPosts()
      .subscribe((approvedPosts) => (this.posts = approvedPosts));
  }

  getRejectedPosts(author: string) {
    this.filteredPosts = true;
    this.postsService
      .getRejectedPosts(author)
      .subscribe((rejectedPosts) => (this.posts = rejectedPosts));
  }

  newPost(): void {
    this.clearModel();
    this.postModel.author = this.loginService.getUser()!.username;
    this.postsService.openPostForm();
  }

  newComment(): void {
    let comment: PostComment = {
      user: this.user ? this.user.username : 'guest',
      content: this.postComment,
      date: new Date().toLocaleDateString('en-gb'),
    };
    this.postsService.newComment(comment, this.postModel).subscribe((post) => {
      this.postModel = post;
      this.postComment = '';
    });
  }

  deletePost(id: number): void {
    this.postsService.deletePost(id).subscribe(() => this.getApprovedPosts());
  }

  deletePendingPost(id: number): void {
    this.postsService.deletePost(id).subscribe(() => this.getPendingPosts());
  }

  getUser(): void {
    this.user = this.loginService.getUser();
  }

  approvePost(id: number): void {
    this.postsService.approvePost(id).subscribe(() => this.getPendingPosts());
  }

  rejectPost(id: number): void {
    this.postsService.rejectPost(id).subscribe(() => this.getPendingPosts());
  }

  setModel(id: number): void {
    this.postsService
      .getPostById(id)
      .subscribe((post) => (this.postModel = post));
  }

  openPost(id: number): void {
    this.setModel(id);
    this.postOpened = true;
  }

  closePost(): void {
    this.clearModel();
    this.postOpened = false;
  }

  clearModel(): void {
    this.postModel = {
      title: '',
      content: '',
      author: '',
      pending: true,
      id: Math.random(),
    };
  }

  log(x: any): void {
    console.log(x);
  }
}
