import React from 'react'
import { getDayOfWeek, getIcon } from '../utils/utils';

export default function TripForecastCard({ info }) {
    const { datetime, tempmax, tempmin, icon } = info;
    const dayOfWeek = getDayOfWeek(datetime);
    const iconImg = getIcon(icon);
    return (
        <div className='forecast__card'>
            <span className='forecast__day'>{dayOfWeek}</span>
            <img className='forecast__icon' src={iconImg} />
            <span className='forecast__temp'>{`${tempmax}`}&deg;/{`${tempmin}`}&deg;</span>
        </div>
    )
}
