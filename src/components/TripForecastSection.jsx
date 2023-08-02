import { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/AppContext';
import TripForecastCard from './TripForecastCard';

export default function TripForecastSection() {
    const { city, tripStartDate, tripEndDate } = useGlobalContext();
    const [tripForecast, setTripForecast] = useState(null);
    const [loading, setLoading] = useState(true);

    const notRenderCondition = !city || !tripStartDate || !tripEndDate;

    async function fetchTripWeather() {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${tripStartDate}/${tripEndDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`;
        const result = await fetch(url).then(res => res.json());
        setTripForecast(result);
    }

    useEffect(() => {
        if (notRenderCondition) return;
        fetchTripWeather(); 
        setLoading(false);
    }, [city, tripEndDate, tripStartDate])


    if (notRenderCondition) return;

    return (
        <section className='forecast__section' onClick={() => console.log(tripForecast)}>
            <span className='forecast__title'>Week</span>
                <div className='forecast__cards'>
                    {tripForecast && tripForecast.days.slice(0, 7).map(day => <TripForecastCard key={day.datetimeEpoch} info={day} />)}
                </div>
        </section>
    )
}