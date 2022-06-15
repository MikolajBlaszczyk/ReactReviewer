import '../styles/review-searcher.css'
import ReviewDiv from './ReviewSearcherDiv'
import { useState } from 'react'
export default function ReviewSearcher() {
    const [displayArray, SetDisplayArray] = useState([
        { Header: "Header", Content: "Content" },
        { Header: "Header", Content: "Content" },
        { Header: "Header", Content: "Content" },
        { Header: "Header", Content: "Content" },
        { Header: "Header", Content: "Content" }
    ])
    const disp = displayArray.map(item => {
        return <ReviewDiv properties={{ ...item }} />
    })
    return (
        <div className='main-review-searcher-div'>
            {disp}
        </div>
    )
}