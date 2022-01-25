import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import { Post, postData } from '../posts';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0');
  yyyy = this.today.getFullYear();
  date =`${this.mm}/${this.dd}/${this.yyyy}`;


  addPostForm = new FormGroup({
    city: new FormControl(''),
    user: new FormControl(''),
    title: new FormControl(''),
    post: new FormControl('',[
      Validators.required,
      Validators.minLength(15)
    ] ),
  });
  city: string = '';
  user: string ='';
  title: string ='';
  post: string ='';
  postID: number = postData.length +1;
  postError = false;

  

  constructor() { }

  ngOnInit(): void {

  }

  addPost(form: NgForm, city: string, user: string, title: string, post: string){

    
    let city_id = parseInt(city);

    let model = new Post(this.postID, city_id, this.date, user, title, post);
    console.log(this.postID);
    console.log(city);
    console.log(user);
    console.log(this.date);
    console.log(title.length);
    console.log(post);

    if(post.length > 0){
    postData.push(model);
    console.log(postData);
    this.postError = false;
    this.postID++;
    form.resetForm();
    } else {
      this.postError = true;
    }

  }

  resetForm(form: NgForm){
    form.resetForm();
  }

}
