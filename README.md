# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# TODO 

## 使用browser sync进行即使刷新

# app step by step

## 1 app.component.html

## 2 创建current-weather组件
```
ng g c current-weather
ng serve --open
```

修改app.component.html，添加<app-current-weather>标签

创建模型
```
ng g i ICurrentWeather
```

## 3 创建weather service
```
ng g s weather --flat false
```

## 4 修复unit test

## 5 null data处理

## 6 docker容器化 TODO

## 7 通过zeit now部署应用到web TODO


