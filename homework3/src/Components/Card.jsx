import '../css/User.css';



export function Card (user) {
    return(
        
        <div className="user">
            <div className="user-inner">
                
                <img src={user.picture.large} alt="" />
                <h2>{user.name.title}. {user.name.first} {user.name.last}</h2>
            </div>
        </div>
        
        
    )
}
export default Card;
