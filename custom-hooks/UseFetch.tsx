import {useState, useEffect} from 'react';

type Item = {
    id: number;
}

const UseFetch = (url: string) => {

    const [mutableData, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res: Response = await fetch(url)
            if(res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            const data = await res.json();
            data && setData(data);

        }, 1000)
    }, [url])

    return { mutableData, isPending, error}
};

export default UseFetch;