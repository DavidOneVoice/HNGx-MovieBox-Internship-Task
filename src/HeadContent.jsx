
import './HeadContent.css'
import Pagination from "./Pagination"
import DesciptionBox from "./DescriptionBox"
export default function HeadContent() {
    return (
        <div className='headcontent'>
            <DesciptionBox />
            <Pagination />
        </div>
    )
}