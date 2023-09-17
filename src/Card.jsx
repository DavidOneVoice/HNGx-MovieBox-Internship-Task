import './Card.css'
import { useState } from 'react';
export default function Card(props) {
    const excessMovies = props.movies;
    const favMovies = excessMovies.slice(0, 10);
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };


    return (
        <>
            {favMovies.map((movie, index) => (
                <div className="card" data-testid='movie-card'>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`} alt="movie" data-testid='movie-poster' />
                    <button className='emoji' onClick={handleClick}
                        style={{ color: active ? "red" : "grey" }}>&#10084;</button>
                    <h2 data-testid='movie-title'>{movie.title}</h2>
                    <h4 data-testid='movie-release-date'>{movie.release_date}</h4>
                </div>
            ))}
        </>
    )
}






