import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.urlPosts)
  }
  
  getPostsByUser(username: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?author=${username}`)
  }

  getPendingPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.urlPosts}?pending=true`)
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${environment.urlPosts}/${id}`)
  }
}
