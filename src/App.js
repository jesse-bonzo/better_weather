import './App.css';
import { useState } from 'react';
import OpenWeatherProvider from './OpenWeatherProvider';
import ForecastView from './ForecastView';

function App() {
  const [position, setPosition] = useState();
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState();
  const [error, setError] = useState();

  if (!position && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    }, error => {
      setError("Unable to retrieve your location");
      console.error(error)
    });
  }

  if (position) {
    if (!location) {
      OpenWeatherProvider.getLocation(position).then(result => result.json()).then(json => setLocation(json[0])).catch(err => console.error(err));
    }

    if (!forecast) {
      OpenWeatherProvider.getForecast(position).then(result => result.json().then(json => setForecast(json)))
      .catch(err => { 
        setError("Unable to retrieve forecast");
        console.error(err)
      });
    }
  }

  if (error) {
    return (
      <div className="App">
        <div className='error'>{error}</div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {location && location.name && location.state && <div className="weather-location">{location.name}, {location.state}</div>}
        {location && location.name && !location.state && <div className="weather-location">{location.name}</div>}
        {forecast && <ForecastView forecast={forecast}></ForecastView>}
      </div>
    );
  }
}

export default App;
