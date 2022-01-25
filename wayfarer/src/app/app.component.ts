import { Component } from '@angular/core';
import { cityData } from './cities/cities_data'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ="Wayfarer";
  cities = cityData;
  posts: any = ['test'];
}
