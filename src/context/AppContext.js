import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
    const [tripStartDate, setTripStartDate] = useState(null);
    const [tripEndDate, setTripEndDate] = useState(null);
    const [city, setCity] = useState(null);
    const [citiesInfo, setCitiesInfo] = useState([{
        id: "_589038940387",
        name: "Berlin",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/berlin-c96f97c4ba.jpg",
        startDate: "14.08.2023",
        endDate: "25.08.2023",
    }, {
        id: "_589038940388",
        name: "Paris",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg",
        startDate: "16.08.2023",
        endDate: "19.08.2023",
    },
    {
        id: "_589038940387",
        name: "Barcelona",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/barcelona_web-8ce54f1421.jpg",
        startDate: "14.08.2023",
        endDate: "20.08.2023",
    },
    {
        id: "_589038940389",
        name: "Amsterdam",
        image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/amsterdam_web-1cd4b2bf75.jpg",
        startDate: "14.08.2023",
        endDate: "20.08.2023",
    },

    ])

    const props = { city, setCity, citiesInfo, setCitiesInfo, tripStartDate, tripEndDate, setTripStartDate, setTripEndDate };

    return (
        <GlobalContext.Provider value={{ ...props }}>
            {children}
        </GlobalContext.Provider>
    )
}
