import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { postData } from './posts';
import { HeaderComponent } from './header/header.component';

@Injectable()
export class SearchDataService {
  posts: any = [];
  searchString: string = "";

  constructor() { }

  }

