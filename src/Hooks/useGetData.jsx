import { useState, useEffect } from "react";
import axios from 'axios';

function useGetData(urls) {
    const [data, setData] = useState({});
    const fetchData = async () => {
        try {
            const requests = urls.map(async (url) => {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/${url}`);
                return response.data;
            });

            const results = await Promise.all(requests);
            const updatedData = results.reduce((prevData, responseData, index) => {
                const key = urls[index];
                return { ...prevData, [key]: responseData };
            }, {});

            setData(updatedData);
            console.log(updatedData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData(["Data not found"])
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return data;
}

export default useGetData;

