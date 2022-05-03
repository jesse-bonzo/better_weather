import DailyForecastView from "./DailyForecastView";

function ForecastView(props) {
    const alerts = props.forecast.alerts && props.forecast.alerts.map((alert, index) => <div key={index}>{alert.event}</div>);

    const daily = props.forecast.daily.slice(0, 7).map((daily, index) => <DailyForecastView key={index} forecast={daily}></DailyForecastView>)

    return (<>
        {alerts && <div>
            <div>Weather Alerts</div>
            {alerts}
        </div>}
        {daily}
    </>)
}

export default ForecastView;