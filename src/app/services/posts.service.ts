import { Injectable } from '@angular/core'; 
import { HttpClient } from  '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Post } from '@app/entities/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private postsEndpoint: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly httpClient: HttpClient) { }

  public getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(this.postsEndpoint);
  }
}
