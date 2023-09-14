
import './NavBar.css'
import MovieBox from "./MovieBox"
import Search from "./Search"
import Menu from "./Menu"
export default function () {
    return (
        <div className='navbar'>
            <MovieBox />
            <Search />
            <Menu />
        </div>
    )
}