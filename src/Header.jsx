import './Header.css'
import NavBar from './NavBar'
import HeadContent from './HeadContent'
export default function Header() {
    return (
        <div className='header'>
            <NavBar />
            <HeadContent />
        </div>
    )
}