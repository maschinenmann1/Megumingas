import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLOG } from './components';
import { BlogRoutingModule } from './blog-routing.module';


@NgModule({
  declarations: [
    BLOG
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
