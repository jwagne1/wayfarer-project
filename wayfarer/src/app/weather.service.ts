import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  cityCodes = [
    {
      "cid": 0,
       "id": 0,
       "name": ""
     },
    {
      "cid": 1,
       "id": 1689969,
       "name": "San Francisco"
     },
     {
      "cid": 2,
       "id": 2643741,
        "name": "London"
     },
     {
      "cid": 3,
       "id": 2411585,
        "name": "Gibraltar"
     },
     {
      "cid": 4,
       "id": 6619279,
       "name": "Sydney"
     },
     {
      "cid": 5,
       "id": 5809844,
       "name": "Seattle"
     }
  ]
  constructor(private http: HttpClient) { }

  createAPIObservable(cityCode: any, unit: string){
    console.log(cityCode)
    let city = this.cityCodes[parseInt(cityCode)];
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=${unit}`)
  }

}
