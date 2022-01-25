import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { cityData } from '../cities/cities_data';
import { postData } from '../posts';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityIndex: string | null = '';
  weather: any = [];
  name: string | null = '';
  city: any;
  posts: any = postData;
  filteredPosts: any = [];
  post: any;
  unit: string = "imperial";
  weatherSubject = new Subject;


  constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather = [];

    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id');

      this.city = cityData.find(city => {
        const paramID: string = params.get('id') || '';

        this.weatherService.createAPIObservable(this.cityIndex, this.unit)
        .subscribe((response: any) => {
          console.log(response)
          this.weather = response;
        });

        return city.id === parseInt(paramID);

      });
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id');

      this.filteredPosts = this.posts.find((post: { city_id: number; }) => {
        const paramID: string = params.get('id') || '';
        return post.city_id === parseInt(paramID);

      });
    });

    console.log(this.cityIndex);  



  }

  findWeather(cityIndex: string){
    this.weatherSubject.next(cityIndex)
  }

}
