import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/AppContext'

export default function Countdown() {
  const { tripStartDate, city } = useGlobalContext();
  const [countdownInfo, setCountDownInfo] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const {days, hours, minutes, seconds} = countdownInfo;
  const tripStart = new Date(tripStartDate);
  tripStart.setHours(0, 0, 0, 0);
  const tripDate = tripStart.getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const gap = tripDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour *24;

    const remainingDays = Math.floor(gap/day);
    const remainingHours = Math.floor((gap % day)/hour);
    const remainingMinutes = Math.floor((gap % hour)/minute);
    const remainingSeconds = Math.floor((gap % minute)/second);

    setCountDownInfo({
        days: remainingDays,
        hours: remainingHours, 
        minutes: remainingMinutes,
        seconds: remainingSeconds
    })
  }

  useEffect(() => {
    const intervalID = setInterval(updateCountdown, 1000) 
   
    return () => {
        clearInterval(intervalID);
    }
  }, [city, tripStartDate])



  return (
    <div className='countdown'>
        <div className='countdown__item'>
            <span className='value'>{days < 10 ? "0" + days : days }</span>
            <span className='text'>days</span>
        </div>
        <div className='countdown__item'>
            <span className='value'>{hours < 10 ? "0" + hours : hours}</span>
            <span className='text'>hours</span>
        </div>
        <div className='countdown__item'>
            <span className='value'>{minutes < 10 ? "0" + minutes : minutes}</span>
            <span className='text'>minutes</span>
        </div>
        <div className='countdown__item'>
            <span className='value'>{seconds < 10 ? "0" + seconds : seconds}</span>
            <span className='text'>seconds</span>
        </div>
    </div>
  )
}
