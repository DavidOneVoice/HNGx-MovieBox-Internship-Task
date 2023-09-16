import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'
import './Cards.css'
export default function Cards() {
    const [movies, setMovies] = useState([]);

    const getMovieReq = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=ddca30372f9d8cea93f8a81a1e22258e');
        console.log(response.data.results);
        setMovies(response.data.results);
    }
    useEffect(() => {
        getMovieReq();
    }, [])


    return (
        <div className='cards'>
            <Card movies={movies} />
        </div>
    )
}

