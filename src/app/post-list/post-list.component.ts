import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.services';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  listOfPosts : Post[] = [];
  constructor(
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.listOfPosts = this.postService.getPosts();
  }

}
