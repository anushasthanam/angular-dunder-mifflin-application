import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
userId: number = this.dataStorageService.user.id;
  posts: Post[] = [];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.fetchPosts(this.userId).subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

}