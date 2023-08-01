import React, { useState } from 'react'
import { useGlobalContext } from '../context/AppContext';

export default function CityCard(props) {
    const { city, active, setActive } = props;
    const { setCity, setTripStartDate, setTripEndDate } = useGlobalContext();
    function format(str) {
        const formatted = str.split('.').reverse().join('-');
        return formatted
    }
    function chooseTrip() {
        setActive(city.name);
        setCity(city.name);
        setTripStartDate(format(city.startDate));
        setTripEndDate(format(city.endDate))
    }

    return (
        <div className={`city-card ${(active === city.name) && "active"}`} onClick={chooseTrip}>
            <img className='city-card__img' src={city.image} alt={city.name + "image"} />
            <div className='city-card__info'>
                <span className='city-card__title'>{city.name}</span>
                <span className='city-card__date'>{`${city.startDate} - ${city.endDate}`}</span>
            </div>
        </div>
    )
}
