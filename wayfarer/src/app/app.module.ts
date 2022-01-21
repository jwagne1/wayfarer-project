import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CitiesComponent,
    CityComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    HomeModule  
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
