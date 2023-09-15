import './Card.css'
export default function Card() {
    const movieList = []
    //const title = movieList;
    //const poster = movieList;
    //const year = movieList;
    return (
        <div className="card" data-testid='movie-card'>
            <img src="" alt="movie" data-testid='movie-poster' />
            <h2 data-testid='movie-title'>Title</h2>
            <h4 data-testid='movie-release-date'>Released: </h4>
        </div>
    )
}