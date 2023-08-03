import React, { useEffect, useState } from 'react';
import CityCard from './CityCard';
import AddTripBtn from './AddTripBtn';

export default function CityCards({citiesInfo, filtered}) {
    const [active, setActive] = useState('');
    const [cityCards, setCityCards] = useState(citiesInfo);
 
    return (
        <section className='city-cards__container'>
            <div className='city-cards__section'>
            {filtered.length
                ?
                filtered.map(city => <CityCard key={city.id} city={city} active={active} setActive={setActive} />)
                :
                <>
                 {cityCards && cityCards.length > 0 && cityCards.map(city => <CityCard key={city.id} city={city} active={active} setActive={setActive} />)}
                 {!cityCards && <div>no data found</div>}
                </>
             }
           
        </div>
        <AddTripBtn/>
        </section>
     
    )
}
