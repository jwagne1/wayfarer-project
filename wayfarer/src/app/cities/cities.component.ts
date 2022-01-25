import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cityData } from './cities_data';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities = cityData;
  citiesIndex: string|null = '';
  city: any;
  name: string|null ='';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.paramMap.subscribe( params => {
      this.citiesIndex = params.get('id');

      this.city = this.cities.find( city => {
        const paramID: string = params.get('id') || '';
        return city.id === parseInt(paramID);
      });
      
    });

    this.route.queryParams.subscribe( params => {
      this.name = params['name'];
    });


  }

}
