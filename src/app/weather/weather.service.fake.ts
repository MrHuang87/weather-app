import { ICurrentWeather } from './../icurrent-weather'
import { Observable } from 'rxjs/internal/Observable'
import { IWeatherService } from './weather.service'
import { of } from 'rxjs/internal/observable/of';

export class WeatherServiceFake implements IWeatherService {
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }
}
