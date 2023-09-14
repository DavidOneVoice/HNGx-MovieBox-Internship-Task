import './Card.css'
export default function Card() {
const movieList = [
    {title: 'Legend of the Seeker Complete Season', poster: 'https://media.istockphoto.com/id/512574420/photo/lamp-of-wishes-in-the-desert.webp?b=1&s=170667a&w=0&k=20&c=SVoUtxrKMAurYrxNJhVqt2eHsRrgREx_FQ1pljoxFeY=', year: '2010' }]
    const title = movieList[0].title;
    const poster = movieList[0].poster;
    const year = movieList[0].year;
    return (
        <div className="card" data-testid: movie-card>
            <img src={poster} alt="movie" data-testid: movie-poster/>
             <h2 data-testid: movie-title>{title}</h2>
            <h4 data-testid: movie-release-date>Released: {year}</h4>
        </div>
    )
}