import TrailerBottom from "./TrailerBottom"
import TrailerInfo from "./TrailerInfo"
import Trailer from "./Trailer"
import './Details.css'
export default function Details() {

    return (
        <div className="details">
            <Trailer />
            <TrailerInfo />
            <TrailerBottom />
        </div>
    )
}