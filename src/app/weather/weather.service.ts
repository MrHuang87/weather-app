import { Observable } from 'rxjs/internal/Observable'
import { environment } from './../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ICurrentWeather } from '../icurrent-weather'

import { map } from 'rxjs/operators'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather>
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  getCurrentWeather(
    search: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    let uriParams = ''
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if (country) {
      uriParams = `${uriParams},${country}`
    }

    return this.getCurrentWeatherHelper(uriParams)
  }

  private getCurrentWeatherHelper(uriParams: string): Observable<ICurrentWeather> {
    const url =
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
      `${uriParams}&appid=${environment.appId}`

    console.log(url)
    return this.httpClient.get<ICurrentWeatherData>(url).pipe(
      map(data => {
        return this.transformToICurrentWeather(data)
      })
    )
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description,
    }
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return (kelvin * 9) / 5 - 459.67
  }
}
