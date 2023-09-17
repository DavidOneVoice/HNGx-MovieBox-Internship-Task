import MovieBox from "./MovieBox";
import './Sidebar.css'
export default function Sidebar() {

    return (
        <div className="sidebar">
            <section className="moviebox">
                <MovieBox />
                <h1>Movie Box</h1>
            </section>
            <section className="homeparent">
                <span className="homelogo"></span>
                <h2>Home</h2>
            </section>
            <section className="movieparent">
                <span className="movielogo"></span>
                <h2>Movies</h2>
            </section>
            <section className="tvparent">
                <span className="showlogo"></span>
                <h2>TV Series</h2>
            </section>
            <section className="calenderparent">
                <span className="calenderlogo"></span>
                <h2>Upcoming</h2>
            </section>
            <section className="games">
                <h4>Play Movie quizes and earn free tickets</h4>
                <h5>50k people are playing now</h5>
                <button>Start Playing</button>
            </section>
            <section className="logoutparent">
                <span className="logoutlogo"></span>
                <h2>Logout</h2>
            </section>
        </div>
    )
}