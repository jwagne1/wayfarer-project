import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { Subscription } from 'rxjs';
import { postData } from '../posts';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string ="Wayfarer";
  search: string = "";
  posts: any = [];
  cities = ['San Francisco','London','Gibraltar','Sydney','Seattle'];
 

  constructor(private router: Router){} 

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

  clearForm(){
    this.search='';
  }

  searchPosts(){
    if(this.search){
      this.router.navigateByUrl("/search/" + this.search)
      
    }



    // let postArray = [];
    // for(let i = 0; i < postData.length; i++){
    //   if(postData[i].post.toLowerCase().includes(searchString.toLowerCase())){
    //     postArray.push(postData[i])
    //   }
    // }
    // console.log(searchString)
    // this.posts =  postArray;
    // console.log(postArray)
    this.search='';
  }


    

}
