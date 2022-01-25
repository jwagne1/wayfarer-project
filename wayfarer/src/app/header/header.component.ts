import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { Subscription } from 'rxjs';
import { postData } from '../posts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string ="Wayfarer";
  search: string = "";
  posts: any = [];
 

  constructor(private router: Router){} 

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
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
  }
  clearSearch(){
    this.posts=[];
  }
    

}
