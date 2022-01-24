import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchDataService } from '../search-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  posts: any;
  subscription: Subscription = new Subscription;

  constructor(private data: SearchDataService) { }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
