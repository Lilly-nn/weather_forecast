import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
    const [tripStartDate, setTripStartDate] = useState(null);
    const [tripEndDate, setTripEndDate] = useState(null);
    const [city, setCity] = useState(null);
    const [citiesInfo, setCitiesInfo] = useState([
        {
            id: "_589038940387",
            name: "Barcelona",
            image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona_web-8ce54f1421.jpg",
            startDate: "13.08.2023",
            endDate: "21.08.2023",
        },
    ])
    const [filtered, setFiltered] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(localStorage.getItem("isAuthorized") || false);
    
    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);

    const props = { city, setCity, citiesInfo, setCitiesInfo, tripStartDate, tripEndDate, setTripStartDate, setTripEndDate, filtered, setFiltered, isModalOpen, setModalOpen, isAuthorized, setIsAuthorized, userInfo, setUserInfo };

    return (
        <GlobalContext.Provider value={{ ...props }}>
            {children}
        </GlobalContext.Provider>
    )
}
