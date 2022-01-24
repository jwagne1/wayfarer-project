import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityData } from '../cities/cities_data';
import { postData } from '../posts';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityIndex: string | null = '';
  name: string | null = '';
  city: any;
  posts: any = postData;
  filteredPosts: any = [];
  post: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id');

      this.city = cityData.find(city => {
        const paramID: string = params.get('id') || '';
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

  }

}
