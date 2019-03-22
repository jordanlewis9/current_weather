import React from 'react';
import './stylesheets/WeatherInfo.css';

//allow us to get info from the weather API


const WeatherInfo = ( props ) => {
    const kelvin = parseInt(props.temp, 10);

    const convertKelvin = () => {
        return Math.round((kelvin - 273.15) * 9/5 + 32)
    }
     
    return (
        <div id="weather">
            <h1 className="city">{props.city}</h1>
            <br/>
            <p>{props.type}
            <br/>
            {convertKelvin()}°F</p>
        </div>
    )
}

export default WeatherInfo