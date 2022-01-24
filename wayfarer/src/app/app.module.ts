import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CityComponent } from './city/city.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CitiesComponent,
    CityComponent,
    PostComponent,
    SearchComponent,
    AddPostComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    HomeModule,
    FormsModule 
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
