import {useState, useEffect} from "react";


const useFetch = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://swapi.dev/api/films/", {
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                if (response.ok) return response.json();

                setIsError(true);
                setIsLoading(false);
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setIsLoading(false);
            });
    }, []);
    //οταν deps είναι κενό array τρέχει μόνο μια φορά στο render!
    return {data, isLoading, isError, setData};
};

export  default useFetch;
