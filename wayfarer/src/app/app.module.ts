import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
      
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
