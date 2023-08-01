import { useState } from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

export default function Input() {
    const [inputValue, setInputValue] = useState('');

    function handleSearch(e) {
        if (e.code === "Enter") {
            console.log(inputValue);
            console.log(process.env.REACT_APP_WEATHER_API)
            setInputValue('')
        }
    }
    return (
        <div className="input__container" tabIndex="0">
            <FaMagnifyingGlass size={20} className="icon" />
            <input value={inputValue} onKeyDown={handleSearch} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Search your trip" className="input" />
        </div>
    )
}
