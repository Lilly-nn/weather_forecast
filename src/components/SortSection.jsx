import { useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";
import { useGlobalContext } from "../context/AppContext";
import SortIcon from "./SortIcon";

export default function SortSection() {
    const [inputValue, setInputValue] = useState('');
    const { citiesInfo, setFiltered } = useGlobalContext();
    const filteredCities = [];

    function handleSearch(e) {
        if (e.code === "Enter") {
            citiesInfo.map(city => {
                if(city.name.toLowerCase().includes(inputValue.toLowerCase())) {
                    filteredCities.push(city);
                    setFiltered(filteredCities);
                } 
            })
        }
    }

    function reset() {
        setInputValue('');
        setFiltered([]);
    }

    return (
        <div className="sort__container">
            <div className="input__container" tabIndex="0">
                <FaMagnifyingGlass size={20} className="icon" />
                <input value={inputValue} onKeyDown={handleSearch} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search your trip" className="input" />
                <CiCircleRemove onClick={reset} className="clear-icon" size={28}/>
            </div>
            <SortIcon/>
        </div>
       
    )
}
