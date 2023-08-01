import React from 'react'
import Input from './Input'
import CityCards from './CityCards'
import TripForecastSection from './TripForecastSection'

export default function WeatherForecast() {
    return (
        <section className='weather__section'>
            <h1 className="app__title">Weather <span className="app__title--bold">Forecast</span></h1>
            <section>
                <Input />
                <CityCards />
                <TripForecastSection />
            </section>
        </section>
    )
}
