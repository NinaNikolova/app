import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  postList: Post[] = [];
  isLoading: boolean = true;
  thereAreNoPosts: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    // this is observable and we have to subscribe 
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.postList = posts;
        this.isLoading = false;
        if (this.postList.length == 0) {
          this.thereAreNoPosts = true;
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error(`Error: ${err}`)
      }
    })



  }
}


