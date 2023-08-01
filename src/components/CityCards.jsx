import React, { useState } from 'react'
import CityCard from './CityCard'
import { useGlobalContext } from '../context/AppContext';

export default function CityCards() {
    const { citiesInfo } = useGlobalContext();
    const [active, setActive] = useState('');
    const [cityCards, setCityCards] = useState(citiesInfo);

    return (
        <section className='city-cards__section'>
            {cityCards && cityCards.length > 0 && cityCards.map(city => <CityCard key={city.id} city={city} active={active} setActive={setActive} />)}
            {!cityCards && <div>no data found</div>}
        </section>
    )
}
