import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { LoginService } from 'src/app/services/login.service';
import { PostsService } from 'src/app/services/posts.service';

//COMPONENTE DE CARGA Y EDICION DE POSTS

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css']
})
export class PostsFormComponent implements OnInit {
  
  @Output() refreshPostsEvent = new EventEmitter();
  @Input() postModel?: Post;

  constructor(public postsService: PostsService, public loginService: LoginService) { }

  ngOnInit(): void{ 
    
  }

  refreshPosts(): void {
    this.refreshPostsEvent.emit();
  }

  submitPost(): void {
    if(this.postModel && this.postModel.title && this.postModel.content) {
        this.postsService.submitPost(this.postModel).subscribe(() => {
          this.postsService.closePostForm();
          this.refreshPosts();
        });
        
      } else alert("missing fields");
    }

  editPost(): void {
    if(this.postModel && this.postModel.title && this.postModel.content){
      this.postsService.editPost(this.postModel).subscribe(() => { 
        this.postsService.closeEditForm()
        this.refreshPosts();
      });
    } else alert("missing fields");
  }
  
}
