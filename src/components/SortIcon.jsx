import { GoSortAsc } from "react-icons/go";
import { useGlobalContext } from "../context/AppContext";

export default function SortIcon() {
    const { citiesInfo, setFiltered, filtered } = useGlobalContext();
    
    function sort() {
            if(filtered.length) {
                sortByStartDate(filtered);
            
            } else {
                sortByStartDate(citiesInfo)
            
            }
    }


    function sortByStartDate(arr) {
        const sortedCities =  [...arr];
        sortedCities.sort((el1, el2) => 
            (el1.startDate > el2.startDate) ? 1 : ((el2.startDate > el1.startDate) ? -1 : 0));
        setFiltered(sortedCities)
    }

  return (
    <div>
        <GoSortAsc onClick={sort} className="sort-icon" size={32}/>
    </div>
  )
}
