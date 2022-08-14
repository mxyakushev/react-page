export default function Item(props){
    return (
        <div className='item'>
            <img src={props.imageUrl} alt="img"/>
            <div className='item-body'>
                <div className='location'>
                    <span>{props.location}</span>
                    <a href={props.googleMapsUrl} target='_blank' rel="noreferrer">View on Google Map</a>
                </div>
                <h1 className='title'>
                    {props.title}
                </h1>
                <h3 className='date'>
                    {props.startDate} - {props.endDate}
                </h3>
                <div className='description'>
                    {props.description}
                </div>
            </div>
        </div>
    )
}
