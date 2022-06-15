export default function ReviewDiv(props) {

    return (
        <div className='search-div'>
            <h1>{props.properties.Header}</h1>
            <h3>{props.properties.Content}</h3>
        </div>
    )
}