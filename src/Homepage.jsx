import './Homepage.css'
import Header from "./Header"
import Featured from './Featured'
import Cards from './Cards'
import Footer from './Footer'
export default function Homepage() {
    return (
        <div>
            <Header />
            <Featured />
            <Cards />
            <Footer />
        </div>
    )
}