class Weather {
  constructor(city) {
    this.apiKey = "a21f088b04f422ce5eb3221b0bf74fcf";
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change location
  changeLocation(city) {
    this.city = city;
  }
}
