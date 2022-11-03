import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  public postFormOpen: boolean = false;
  public editFormOpen: boolean = false;

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.urlPosts);
  }
  
  getPostsByUser(username: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?author=${username}&pending=false`);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.urlPosts}/${id}`)
  }

  getPendingPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?pending=true`);
  }

  getApprovedPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?pending=false`);
  }

  getRejectedPosts(author: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?rejected=true&author=${author}`)
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${environment.urlPosts}/${id}`);
  }

  openPostForm(): void {
    this.postFormOpen = true;
  }

  closePostForm(): void {
    this.postFormOpen = false;
  }

  openEditForm(): void {
    this.editFormOpen = true;
  }
  
  closeEditForm(): void {
    this.editFormOpen = false;
  }

  submitPost(post: Post): Observable<Post> {
    post.id = Math.random()
    return this.http.post<Post>(environment.urlPosts, post)
  }

  editPost(post: Post): Observable<Post> {
    post.pending = true;
    post.rejected = false;
    return this.http.put<Post>(`${environment.urlPosts}/${post.id}`, post)
  }

  approvePost(id: number): Observable<Post> {
    let publishDate = new Date()
    return this.http.patch<Post>(`${environment.urlPosts}/${id}`,{"pending": false, "publishDate": publishDate})
  }

  rejectPost(id: number): Observable<Post> {
    return this.http.patch<Post>(`${environment.urlPosts}/${id}`, {"pending": true, "rejected": true})
  }
}
