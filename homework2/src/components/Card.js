
export function Card (props) {
    return(
        <div className="shopping-item">
            <h3>{props.title}</h3>
            <img src={props.image} alt="image"/>
            <div className="description">
                <span>{props.stockStatus}</span>
                <span>Points {props.points}</span>
            </div>
            <div className="badges">
                <span className="badge-1">{props.badges[1]}</span>
                <span className="badge-2">{props.badges[2]}</span>
            </div>
            <button>Add To Cart</button>
        </div>
    )
}

export default Card;