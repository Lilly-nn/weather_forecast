import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export default function AppContext({ children }) {
    const [tripStartDate, setTripStartDate] = useState(null);
    const [tripEndDate, setTripEndDate] = useState(null);
    const [city, setCity] = useState(null);
    return (
        <GlobalContext.Provider value={{ city, setCity, tripStartDate, tripEndDate, setTripStartDate, setTripEndDate }}>
            {children}
        </GlobalContext.Provider>
    )
}
