import React, { useEffect, useState } from 'react';
import CityCard from './CityCard';
import AddTripBtn from './AddTripBtn';
import { useGlobalContext } from '../context/AppContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebase.config';

export default function CityCards({citiesInfo, filtered}) {
    const [active, setActive] = useState('');
    const [cityCards, setCityCards] = useState([]);
    const {isAuthorized, userInfo, setCitiesInfo} = useGlobalContext();
   
    async function fetchFromDB() {
        const stored = [];
        const result = await getDocs(collection(db, "users", userInfo.id, "trips"));
        result.forEach((doc) => {
          stored.push(doc.data())
        });
        setCitiesInfo(stored);
        setCityCards(stored);
    }


    useEffect(() => {
        if(isAuthorized) {
            fetchFromDB();
        }
    }, [isAuthorized])

    useEffect(() => {
        setCityCards(citiesInfo);
    }, [citiesInfo])
    
    return (
        <section className='city-cards__container'>
            <div className={`city-cards__section ${cityCards.length > 3 && "overflow"}`}>
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
