import { useState, useEffect } from "react";

function useFetchCharacter(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const jsonData = await res.json();
                console.log(jsonData)
                setData(jsonData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
            
        }
        fetchData();
    }, [url]);

    return data;  
}

export default useFetchCharacter;