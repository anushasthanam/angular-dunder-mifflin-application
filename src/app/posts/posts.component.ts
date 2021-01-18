import { IUser } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post.model';
import { DataStorageService } from '../../services/data-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId: number;
  posts: IPost[] = [];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.userId = this.dataStorageService.user.id;
    this.dataStorageService.fetchPosts(this.userId).subscribe((data: IPost[]) => {
      this.posts = data;
    });
  }

}