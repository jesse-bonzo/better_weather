import "./DailyForecastView.css";

import dayjs from "dayjs";
import Temperature from "./Temperature";

function DailyForecastView(props) {
    const date = new Date(props.forecast.dt * 1000);
    const day = dayjs(date).format('dddd');

    let icon = null;
    let description = null;
    if (props.forecast.weather && props.forecast.weather.length > 0) {
        icon = `http://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@2x.png`
        description = props.forecast.weather[0].main;
    }

    return (<div className="day-forecast">
        <div className="day-name">{day}</div>
        {icon && <div><img src={icon} alt={description} /></div>}
        <div className="container">
            <div className="day-low"><span className="label">Low:</span> <Temperature value={props.forecast.temp.min} /></div>
            <div className="day-high"><span className="label">High:</span> <Temperature value={props.forecast.temp.max} /></div>
            <div className="day-wind"><span className="label">Wind:</span> {Math.floor(props.forecast.wind_speed)} mph</div>
            <div className="day-percipitation"><span className="label">Chance of Percipitation:</span> {props.forecast.pop * 100}% </div>
        </div>
    </div>)
}

export default DailyForecastView;