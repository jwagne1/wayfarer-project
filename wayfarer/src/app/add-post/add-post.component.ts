import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  city: any;
  user: string|null ='';
  title: string|null ='';
  post: string|null ='';

  constructor() { }

  ngOnInit(): void {
  }

}
