import { WeatherService } from './../weather/weather.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  search = new FormControl('', [Validators.minLength(2)]);

  constructor(private weatherService : WeatherService) { }

  ngOnInit() {
    // 使用currentWeather这个 BehaviorSubject，就可以不使用@Output和上层组件进行交互了，这是个全局的订阅发布。
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(
      (searchValue: string) => {
        if (!this.search.invalid) {
          const userInput = searchValue.split(',').map(s => s.trim());
          this.weatherService.getCurrentWeather(userInput[0], 
            userInput.length > 1 ? userInput[1] : undefined
          ).subscribe(data => this.weatherService.currentWeather.next(data));
        }
      }
    );
  }

}
