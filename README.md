# A Better Weather App for KaiOS

I was unhappy with the default weather app on KaiOS, so I wrote my own.

## Building
### Requirements
* nodejs v14+
* An [Open Weather Map](https://openweathermap.org) API key

### Build steps

Put your Open Weather Map API as the value for the key `REACT_APP_OPEN_WEATHER_API_KEY` in `.env`

`npm install`

`npm run build`

The packaged app will be in `build`. That can be installed using the [KaiOS developer tools](https://developer.kaiostech.com/docs/sfp-3.0/getting-started/env-setup/os-env-setup).

## Running

`npm run start`

## Credits
* Logo - https://openclipart.org/detail/18892/-by--18892
