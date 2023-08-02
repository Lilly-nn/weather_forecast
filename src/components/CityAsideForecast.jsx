import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/AppContext'
import { getBackground, getDayOfWeek, getIcon } from '../utils/utils';
import Countdown from './Countdown';

export default function CityAsideForecast() {
    const { city } = useGlobalContext();
    const [cityInfo, setCityInfo] = useState(null);
    const [weather, setWeather] = useState(null);
    const [isAsideVisible, setIsAsideVisible] = useState(false);

    async function fetchCurrentWeather() {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`;
        const result = await fetch(url).then(res => res.json());
        setCityInfo(result);
    }

    function getWeatherInfo() {
        const info = cityInfo.days[0];
        console.log(info);
        setWeather({
            day: getDayOfWeek(info.datetime),
            icon: getIcon(info.icon),
            background: getBackground(info.icon),
            temp: info.temp,
        })
    }

    useEffect(() => {
        if(city) {
              fetchCurrentWeather(); 
        } 
    }, [city])

    useEffect(() => {
        if (cityInfo) {
            getWeatherInfo();
            setIsAsideVisible(true);
        }
    }, [cityInfo])


    return (  
        cityInfo && city && ( 
            <section  className="aside__section" style={{ backgroundImage: `url(${weather?.background})` }}>
                <div className='city-info'>
                    <span className='day'>{weather?.day}</span>
                    <div className='temp'>
                        <img className='icon' src={weather?.icon} />
                        <span className='degrees'>{weather?.temp}</span>
                        <span className='celcius'>&deg;C</span>
                    </div>
                    <span className='city'>{city}</span>
                </div>
                <Countdown/>
            </section>) 
    )
}
