import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { LoginService } from 'src/app/services/login.service';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
  
  @Input() title?: string;
  @Input() content?: string;
  postToEdit?: Post;

  constructor(public postsService: PostsService, public loginService: LoginService) { 
    this.postsService.getPostById(this.postsService.idToEdit!).subscribe(post => {
      this.postToEdit = post;
    })
  }

  ngOnInit(): void {

  }

  submitPost(): void {
    if(this.title && this.content) {
      let post: Post = {
        "title": this.title,
        "content": this.content,
        "author": this.loginService.getUser()!.username,
        "pending": true,
        "rejected": false,
        "id": Math.random()
      }
      if (this.checkMissingFields()) {
        this.postsService.submitPost(post).subscribe(() => this.postsService.closePostForm());
      } else alert("missing fields")
    }
    
  }

  editPost(): void {
  
    let post: Post = {
      "title": this.title!,
      "content": this.content!,
      "author": this.loginService.getUser()!.username,
      "pending": true,
      "rejected": false,
      "id": Math.random()
    }
    if(this.checkMissingFields()) {
      this.postsService.editPost(post).subscribe(() => this.postsService.closeEditForm())
    }
  }

  checkMissingFields(): boolean {
    if (this.title!.trim().length > 0 && this.content!.trim().length > 0 ) {
      return true;
    } else return false;
  }
}
