import { useGlobalContext } from '../context/AppContext';
import {GrClose} from "react-icons/gr";
import {LuAsterisk} from "react-icons/lu";
import { addDays, formatDateToTemplate, getCalendarInitData } from '../utils/utils';
import { useEffect, useState } from 'react';
import { cities } from '../info/cities';

export default function Modal() {
    const {isModalOpen, setModalOpen, citiesInfo, setCitiesInfo} = useGlobalContext();
    const [options, setOptions] = useState([]);
    const {startDate, startEnd} = getCalendarInitData();
    const [endMax, setEndMax] = useState('');
    const [data, setData] = useState({
        city: "",
        startDate: "",
        endDate: ""
    })

    useEffect(() => {;
        setOptions(cities);
    }, [cities])

    useEffect(() => {
        if(data.startDate) {
            setEndMax(formatDateToTemplate(addDays(data.startDate, 15)))
        }
    }, [data.startDate])
   
    function changeData(e) {
            setData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
       }

    function closeModal() {
        setModalOpen(false);
        setData({
            city: "",
            startDate: "",
            endDate: ""
        })
    }
  
   function addCityCard() {
        if(!data.city || !data.startDate || !data.endDate) {
            alert("Please, fill in all fields!");
            return;
        }
        setCitiesInfo([
            ...citiesInfo, 
            {
                id: `_${Math.random() * 1000}`,
                name: data.city.split(",")[0],
                image: data.city.split(",")[1],
                startDate: data.startDate.split('-').reverse().join('.'),
                endDate: data.endDate.split('-').reverse().join('.'),
            }
        ])
       closeModal();
   }
  

    return (
        isModalOpen && (
             <div className='modal__bg'>
                <div className='modal__cont'>
                    <div className='modal__header'>
                        <div className='modal__header-inner'>
                            <span className='modal__title'>Create trip</span>
                            <GrClose onClick={closeModal} className="modal__close-btn"/>  
                        </div>
                    </div>
                    <div className='modal__body'>
                        <form className='form'>
                            <div className='form__item'>
                              <label><LuAsterisk/>City</label>
                              <select required className='select' value={data.city} name="city" onChange={changeData}>
                                <option value="" disabled selected hidden>Please select a city</option>
                                {options.length > 0 && options.map(el => <option value={[el.name, el.image]} key={el.image} >{el.name}</option>)}
                             </select>  
                            </div>
                            <div className='form__item'>
                              <label><LuAsterisk/>Start Date</label>
                              <input required className={`input ${data.startDate && "has-value"}`} type='date' placeholder="Select date" value={data.startDate} onInput={changeData} min={startDate} max={startEnd} name="startDate"/>  
                            </div>
                            <div className='form__item'>
                              <label><LuAsterisk/>End Date</label>
                              <input required disabled = {!data.startDate ? true : false} className={`input ${data.endDate && "has-value"}`} type='date' placeholder="Select date" value={data.endDate} onInput={changeData} min={data.startDate || startDate} max={endMax} name="endDate" />  
                            </div>
                        </form>
                    </div>
                    <div className='modal__footer'>
                        <div className='modal__footer-inner'>
                            <button className='cancel__btn' onClick={closeModal}>Cancel</button>
                            <button className='save__btn' onClick={addCityCard}>Save</button>    
                        </div>
                       
                    </div>
                </div>
             </div>
        )  
    )
}
