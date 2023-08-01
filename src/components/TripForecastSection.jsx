import { useEffect } from 'react';
import { useGlobalContext } from '../context/AppContext';

export default function TripForecastSection() {
    const { city, tripStartDate, tripEndDate } = useGlobalContext();
    async function fetchTripWeather() {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${tripStartDate}/${tripEndDate}?unitGroup=metric&include=days&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`;
        const result = await fetch(url);
        return result;
    }
    useEffect(() => {
        if (city && tripStartDate && tripEndDate) {
            console.log("t")
        }
    }, [city, tripEndDate, tripStartDate])
    if (!city || !tripStartDate || !tripEndDate) return;
    return (
        <div>
            nice
        </div>
    )
}
