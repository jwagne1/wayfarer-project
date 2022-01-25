import { Component, OnInit } from '@angular/core';
import { postData } from '../posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  posts: any = [];
  search: string | null = "";
  postData: any = postData;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.search = params.get("search");
      this.posts = this.postData.filter((post: any)=> {
                
        if(this.search && (post.title.toLowerCase().includes(this.search.toLowerCase()) || post.post.toLowerCase().includes(this.search.toLowerCase()))) {
          return post;
        }
      })
    })
      console.log(this.posts);     

  }
}
