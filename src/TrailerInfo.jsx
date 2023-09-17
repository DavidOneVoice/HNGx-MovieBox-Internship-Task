import './TrailerInfo.css'
export default function TrailerInfo() {

    return (
        <div className="trailerinfo">
            <section className="infodiv">
                <h2>Top Gun: Maverick</h2>
                <span><b>*</b></span>
                <h2>2022</h2>
                <span><b>*</b></span>
                <h2>PG-13</h2>
                <span><b>*</b></span>
                <h2>2h 30m</h2>
                <button>Action</button>
                <button>Drama</button>
            </section>
            <section className="rating">
                <span className="ratinglogo"></span>
                <div><span className='ratingnum'>8.5</span> | 350k</div>
            </section>
        </div>
    )
}