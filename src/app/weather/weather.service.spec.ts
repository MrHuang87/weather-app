import { ICurrentWeather } from './../icurrent-weather'
import { TestBed, inject } from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import { WeatherService } from './weather.service'

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    })
  })

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy()
  }))

  // it('should get current weather info', inject([WeatherService], (service: WeatherService) => {
  //   let current: ICurrentWeather;
  //   service.getCurrentWeather('shenzhen', 'cn').subscribe(data => current = data);
  //   console.log(current);
  //   expect(current.city.toLowerCase()).toBe('shenzhen');
  // }));
})
