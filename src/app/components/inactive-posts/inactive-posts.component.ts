import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
