import {useState, useEffect} from "react";


const useData = () => {
    const [data, setData] = useState([]);
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
                setData(data.results);
                setIsLoading(false);
            });
    }, []);

    function sortByEpisode() {
        data && setData([].concat(data).sort((a,b) => {

            if (a.episode_id > b.episode_id) return 1
            if (a.episode_id < b.episode_id) return -1
        }))
    }

    function sortByYear() {
        data && setData([].concat(data).sort((a,b) => {

            if (Date.parse(a.release_date) > Date.parse(b.release_date)) return -1
            if (Date.parse(a.release_date) < Date.parse(b.release_date)) return 1
        }))
    }

    return {data, isLoading, isError, sortByEpisode, sortByYear};
};

export  default useData;
