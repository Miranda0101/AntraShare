import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../posts.model';
import { User } from '../users.model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {
  posts: Post[] = [];
  users: User[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((res)=>{
      this.posts = res.posts;
      this.users = res.authors;
      // console.log(typeof(this.posts[1].post_time));
    });
  }

}
