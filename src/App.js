import './App.css';
import { useState } from 'react';
import OpenWeatherProvider from './OpenWeatherProvider';
import ForecastView from './ForecastView';

function App() {
  const [position, setPosition] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();

  if (!position && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }, error => console.error(error));
  }

  if (position) {
    if (!location) {
      OpenWeatherProvider.getLocation(position).then(result => result.json()).then(json => setLocation(json[0])).catch(err => console.error(err));
    }

    if (!forecast) {
      OpenWeatherProvider.getForecast(position).then(result => result.json().then(json => setForecast(json))).catch(err => console.error(err));
    }
  }

  return (
    <div className="App">
      {location && location.name && location.state && <div className="weather-location">{location.name}, {location.state}</div>}
      {location && location.name && !location.state && <div className="weather-location">{location.name}</div>}
      {forecast && <ForecastView forecast={forecast}></ForecastView>}
    </div>
  );
}

export default App;
