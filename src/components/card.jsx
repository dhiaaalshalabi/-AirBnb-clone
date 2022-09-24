
function Card(props) {
    return (
        <div className='card'>
            <img src={require(`../images/${props.coverImg}`)} alt='' className="card-image" />
            <div className='card-stats'>
                <img src={require('../images/star.png')} alt='' className='card-star' />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card