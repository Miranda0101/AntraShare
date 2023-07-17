import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Observable,
  concatMap,
  merge,
  of,
  toArray,
} from 'rxjs';
import { Post } from '../posts.model';
import { User } from '../users.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<{
    posts: Post[];
    authors: User[];
  }> {
    return this.http.get<Post[]>(this.url + 'posts').pipe(
      concatMap((posts) => {
        // Get user email for all posts
        const authorsObs = posts.map((post) => {
          // console.log(this.url+'users/'+post.user);
          return this.http.get<User>(this.url + 'users/' + post.user);
        });

        return merge(...authorsObs).pipe(
          // Get all inner values and put into array
          toArray(),
          concatMap((authors) => {
            // console.log("service", authors)
            return of({ posts, authors });
          })
        );
      })
    );
  }
}
