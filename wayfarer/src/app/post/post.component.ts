import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postData } from '../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postIndex: string | null = '';
  post: any;

  name: string | null = '';
  filteredPosts: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postIndex = params.get('id');

      this.post = postData.find(post => {
        const paramID: string = params.get('id') || '';
        return post.id === parseInt(paramID);

      });
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.route.paramMap.subscribe(params => {
      this.postIndex = params.get('id');

      this.filteredPosts = this.post.find((post: { city_id: number; }) => {
        const paramID: string = params.get('id') || '';
        return post.city_id === parseInt(paramID);

      });
    });

  }

}
