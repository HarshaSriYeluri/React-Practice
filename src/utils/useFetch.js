import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(()=> {
        fetchData(url);
    }, [url])

    const fetchData = async (url) => {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.data);
    }

    return [data];
}

export default useFetch;