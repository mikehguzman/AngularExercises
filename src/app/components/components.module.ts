import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsTableComponent } from './posts-table/posts-table.component';

@NgModule({
  declarations: [
    PostsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostsTableComponent
  ]
})
export class ComponentsModule { }
