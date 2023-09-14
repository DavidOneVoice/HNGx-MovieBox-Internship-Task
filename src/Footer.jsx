import './Footer.css'
import Socials from './Socials'
import Pages from './Pages'
import Copyright from './Copyright'
export default function Footer() {

    return (
        <div className="footer">
            <Socials />
            <Pages />
            <Copyright />
        </div>
    )
}