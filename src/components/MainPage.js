import '../styles/main-page.css'
import { useState } from 'react'
import ReviewWriter from './ReviewWriter'
import ReviewSearcher from './ReviewSearcher';
export default function MainPage() {
    const [stateReviewer, setStateReviewer] = useState('reviewer');
    //function that handles navbar clicks
    const HandleNavClick = (number) => {
        /* if the number that is passed is equal to 0 ReviewWriter component will be displayed. if it is 1 ReviewSearcher */
        setStateReviewer(number)
    }
    // nav click event
    //object literals
    const component = {
        reviewer: <ReviewWriter />,
        searcher: <ReviewSearcher />,
        info: null
    }

    // here is common layout for every functionality of the reviewer site
    return (
        <>
            <div className='content'>
                {/*left navbar*/}
                <div className='navbar-left'>
                    <div className="navbar-text-div">
                        <ul>
                            <li className='navbar-text' onClick={() => HandleNavClick('reviewer')}>Write review</li>
                            <li className='navbar-text' onClick={() => HandleNavClick('searcher')}>First link</li>
                            <li className='navbar-text' onClick={() => HandleNavClick('info')}>First link</li>
                        </ul>
                    </div>
                    <div className='navbar-footer'>
                        <footer>
                            Review site
                            created by Mikołaj Błaszczyk
                        </footer>
                    </div>
                </div>
                {/*content that depends on what user has clicked on navbar*/}
                <div className='main-part'>
                    {component[stateReviewer]}
                </div>
            </div>
        </>
    )
}