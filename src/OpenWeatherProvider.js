
class OpenWeatherProvider {
    constructor() {
        this.appId = "";
    }

    getLocation({ latitude, longitude }) {
        return fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${this.appId}`);
    }

    getCurrentWeather({ latitude, longitude }) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?mode=json&units=imperial&lang=en&lat=${latitude}&lon=${longitude}&appId=${this.appId}`);
    }

    getForecast({latitude, longitude}) {
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?mode=json&units=imperial&lang=en&lat=${latitude}&lon=${longitude}&appId=${this.appId}`);
    }
}

export default new OpenWeatherProvider();