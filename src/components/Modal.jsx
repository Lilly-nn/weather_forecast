import { useGlobalContext } from '../context/AppContext';
import {GrClose} from "react-icons/gr";
import {LuAsterisk} from "react-icons/lu";
import { addDays, formatDateToTemplate } from '../utils/utils';
import { useEffect, useState } from 'react';
import useFetchSelectOptions from '../hooks/useFetchSelectOptions';


export default function Modal() {
    const {isModalOpen, setModalOpen} = useGlobalContext();
    const options = useFetchSelectOptions(true);
    const today = new Date();
    const formattedToday = formatDateToTemplate(today);
    const initialValue = {
        startDate:  formatDateToTemplate(today),
        startEnd: formatDateToTemplate(addDays(today, 15)),
        endDate:  formatDateToTemplate(addDays(formattedToday, 30))
    };
    const [value, setValue] = useState("jkh");
    const [tripDate, setTripDate] = useState({

    })

    
   
  
    console.log(options)

    function changeDate(e) {
        // setStartDate(e.target.value)
    }

    function closeModal() {
        setModalOpen(false)
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
                              <select className='select'>
                                <option value="" disabled selected hidden>Please select a city</option>
                                {options.length > 0 && options.map(el => <option value="" key={el} >{el}</option>)}
                             </select>  
                            </div>
                            <div className='form__item'>
                              <label><LuAsterisk/>Start Date</label>
                              <input className={`input ${value && "has-value"}`}  type='date'  placeholder="Select date" min={initialValue.startDate} max={initialValue.startEnd}/>  
                            </div>
                            <div className='form__item'>
                              <label><LuAsterisk/>End Date</label>
                              <input className={`input ${value && "has-value"}`} type='date' value={initialValue.startEnd} placeholder="Select date"  max={initialValue.endDate} />  
                            </div>
                        </form>
                    </div>
                    <div className='modal__footer'>
                        <div className='modal__footer-inner'>
                            <button onClick={closeModal}>Cancel</button>
                            <button>Save</button>    
                        </div>
                       
                    </div>
                </div>
             </div>
        )  
    )
}
