class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    console.log(weather.weather.description);
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `${this.kelvinToCelsius(weather.main.temp)} ℃`;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${this.kelvinToCelsius(
      weather.main.feels_like
    )} ℃`;
    this.dewpoint.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  }

  kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);
}
