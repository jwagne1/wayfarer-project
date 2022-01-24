import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; 
import { CitiesComponent } from './cities/cities.component'; 
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cities/:id',
    component: CityComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },

  {
    path: 'cities',
    component: CitiesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }