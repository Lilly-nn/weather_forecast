import React, { useState } from 'react'
import { useGlobalContext } from '../context/AppContext';
import { formatDate } from '../utils/utils';

export default function CityCard(props) {
    const { city, active, setActive } = props;
    const { setCity, setTripStartDate, setTripEndDate } = useGlobalContext();

    function chooseTrip() {
        setActive(city.id);
        setCity(city.name);
        setTripStartDate(formatDate(city.startDate));
        setTripEndDate(formatDate(city.endDate))
    }

    return (
        <div className={`city-card ${(active === city.id) ? "active" : ""}`} onClick={chooseTrip}>
            <img className='city-card__img' src={city.image} alt={city.name + "image"} />
            <div className='city-card__info'>
                <span className='city-card__title'>{city.name}</span>
                <span className='city-card__date'>{`${city.startDate} - ${city.endDate}`}</span>
            </div>
        </div>
    )
}
