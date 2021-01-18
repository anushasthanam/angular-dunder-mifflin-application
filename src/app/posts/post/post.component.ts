import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../../models/post.model';
import { DataStorageService } from '../../../services/data-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Input() post: IPost;
  comments: Comment[];
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.dataStorageService.commentsUpdated.subscribe(comments => {
      comments.map(comment => {
        if (comment.filter(a => a.postId === this.post.id).length > 0) {
          return this.comments = comment.filter(a => a.postId === this.post.id);
        }
      });
    });
  }

}