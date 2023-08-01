import React, { useState } from 'react'
import CityCard from './CityCard'

export default function CityCards() {
    const [active, setActive] = useState('');
    const [cityCards, setCityCards] = useState([{
        id: "_589038940387",
        name: "Berlin",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/berlin-c96f97c4ba.jpg",
        startDate: "14.07.23",
        endDate: "21.07.23",
    }, {
        id: "_589038940388",
        name: "Paris",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg",
        startDate: "16.07.23",
        endDate: "19.07.23",
    }
    ])
    // const { today, nextWeek } = getFormattedDays();


    return (
        <section className='city-cards__section'>
            {cityCards && cityCards.length > 0 && cityCards.map(city => <CityCard key={city.id} city={city} active={active} setActive={setActive} />)}
            {!cityCards && <div>no data found</div>}
        </section>
    )
}
