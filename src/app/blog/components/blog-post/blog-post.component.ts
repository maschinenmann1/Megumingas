import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  @Input()
  public post!: Post;
  constructor() { }
}
