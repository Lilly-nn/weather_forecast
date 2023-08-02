import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import CityCards from './CityCards'
import SortSection from './SortSection'
import TripForecastSection from './TripForecastSection'

export default function WeatherForecast() {
    const { citiesInfo, filtered } = useGlobalContext();
    return (
        <section className='weather__section'>
            <h1 className="app__title">Weather <span className="app__title--bold">Forecast</span></h1>
            <section>
                <SortSection />
                <CityCards citiesInfo = {citiesInfo} filtered = {filtered} />
                <TripForecastSection />
            </section>
        </section>
    )
}
