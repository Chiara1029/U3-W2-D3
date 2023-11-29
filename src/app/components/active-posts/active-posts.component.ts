import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postSrv: PostsService) {
    this.postSrv.getPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
