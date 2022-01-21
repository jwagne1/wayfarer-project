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
  name: string|null = '';
  id: number|null = null;
  country: string|null = '';
  population: string|null = '';
  city: any;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {



  }

}
