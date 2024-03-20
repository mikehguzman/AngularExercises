import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '@app/entities/post.type';
import { PostsService } from '@app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrl: './posts-table.component.scss'
})
export class PostsTableComponent implements OnInit, OnDestroy {
  private posts: Array<Post> = [];
  public filteredPosts: Array<Post> = [];
  private postsSubscription!: Subscription;

  constructor(private readonly postsService: PostsService) { }

  ngOnInit(): void {
    this.postsSubscription = this.postsService.getPosts().subscribe({
			error: (error: Error): void => {
				console.error('❌ - Something wrong occurred: %O', error);
				this.posts = [];
			},
			next: (posts: Array<Post>): void => {
				this.filteredPosts = this.posts = posts;
				console.log('this.posts: %O', this.posts);
			}
		});
  }

  public ngOnDestroy(): void {
		this.postsSubscription?.unsubscribe();
	}
}
