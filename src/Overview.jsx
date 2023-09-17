import Sidebar from "./Sidebar"
import Details from "./Details"
import './Overview.css'
export default function Overview() {

    return (
        <div className="overview">
            <Sidebar />
            <Details />
        </div>
    )
}