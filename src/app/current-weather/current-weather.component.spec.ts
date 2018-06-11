import { HttpClientModule } from '@angular/common/http'
import { WeatherService } from './../weather/weather.service'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CurrentWeatherComponent } from './current-weather.component'
import { WeatherServiceFake } from '../weather/weather.service.fake';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent
  let fixture: ComponentFixture<CurrentWeatherComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      providers: [{provide: WeatherService, useClass: WeatherServiceFake}],
      imports: [HttpClientModule],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
