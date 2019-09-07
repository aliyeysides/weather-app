export interface Coordinate {
    lat: number;
    lon: number
}

export interface City {
    coord: Coordinate;
    country: string;
    id: number
    name: string;
    population: number
    sunrise: number;
    sunset: number
    timezone: number;
}

export interface Clouds {
    all: number;
}

export interface Main {
    temp: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
}

export interface Sys {
    pod: string;
}

export interface WeatherObject {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface ListObject {
    clouds: Clouds;
    dt: number
    dt_txt: string
    main: Main
    sys: Sys
    weather: WeatherObject[];
    wind: Wind;
}

export interface Forecast {
    city: City;
    cnt: number;
    cod: string;
    list: ListObject[];
    message: number;
}