import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOG } from './components';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


@NgModule({
  declarations: [
    BLOG,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
