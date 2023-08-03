import { useEffect, useState } from "react";

export default function useFetchSelectOptions(isFirst) {
    let isFirstRender = isFirst;
    const [options, setOptions] = useState([]);

    async function fetchCityOptions() {
        const url = "https://api.teleport.org/api/cities";
        const result = await fetch(url).then(res => res.json());
        const data = result['_embedded']['city:search-results'];
        return data;
    }

    async function formatData () {
          const formatted = [];
          const data = await fetchCityOptions();
          data.map(el => formatted.push(el.matching_full_name));
          setOptions(formatted);
    }

    useEffect(() => {
        if(!options.length && isFirstRender)
            formatData();
            isFirstRender = false;
        }, [])

    return options;
}
