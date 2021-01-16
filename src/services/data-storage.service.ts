// angular imports
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// models imports
import { User } from '../models/user.model';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';


@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) {}
  user: User;
  posts: Post[];
  comments: Comment[] = [];
  commentsUpdated = new EventEmitter<void>();

  storeUser(user: User) {
    this.user = user;
  }

  setComments(comments) {
    this.comments = comments;
    this.commentsUpdated.emit(comments);
  }

  getUser() {
    return this.user;
  }

  getComments() {
    console.log('getting comments');
    return this.comments;
  }

  fetchPosts(userId: number) {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(postsUrl).pipe(
      map(data => {
        return this.processPostsResponse(data, userId);
      })
    );
  }

  processPostsResponse(data, id) {
    this.posts = data.filter(post => post.userId === id);
    const postsIds = this.posts.map(post => {
      return post.id;
    });
    this.fetchComments(postsIds).subscribe();
    return this.posts;
  }

  fetchComments(postsIds: number[]) {
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get(commentsUrl).pipe(
      map(data => {
        return this.processCommentsResponse(data, postsIds);
      })
    );
  }

  processCommentsResponse(data, ids) {
    const comments = [];
    ids.map(id => {
      comments.push(data.filter(comment => comment.postId === id));
    });
    this.setComments(comments);
  }
}
