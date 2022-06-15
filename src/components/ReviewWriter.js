import '../styles/review-writer.css'
import { useState } from 'react'

export default function ReviewWriter() {
    const [textAreaSelection, setTextAreaSelection] = useState(false);
    const [values, setValues] = useState({ reviewValues: "", topicValue: "" })
    const SelectionChanged = () => { setTextAreaSelection(true) }
    const MouseLeave = () => {
        setTextAreaSelection(false)
    }
    const HandleChange = (e) => {
        const { value, name } = e.currentTarget;
        setValues(prev => { return { ...prev, [name]: value } })
    }

    return (
        <div className='main-review-writer-div' id='main-div'>
            <div className='review-writer-nav'>
                <input type='text' id='topic'
                    value={values.topicValue}
                    name='topicValue'
                    placeholder='Write review topic'
                    onChange={HandleChange} />
            </div>
            <div className='review-writer-text-area'>
                <textarea type='textarea'
                    name='reviewValues'
                    className='text-area-default'
                    onMouseOver={SelectionChanged}
                    onMouseLeave={MouseLeave}
                    value={values.reviewValues}
                    onChange={HandleChange}
                    placeholder={textAreaSelection == false &&
                        "WRITE SOMETHING DOWN"}/>
            </div>
        </div>
    )
}