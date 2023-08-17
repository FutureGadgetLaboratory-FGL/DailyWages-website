import './ServiceCard.css'
const ServiceCard = () => {
    const Chips = ["Maid","Cook","Gardner","Security Gaurd","Washerman"];
    return(
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    <div className="serviceTitle">
                        <h3>Daily House Workers</h3>
                    </div>
                    
                        <ul>
                            {Chips.map((chip) => (
                                <li><a>{chip}</a></li>
                            ))}
                        </ul>
        
                    
                </div>
                <div className="serviceImg">
                    <img src="https://media.istockphoto.com/id/656790018/vector/vector-set-sketch-illustration-on-a-white-background-of-objects-and-situations-in-the.jpg?s=612x612&w=0&k=20&c=_9DDosx59QH_OOY-ddy_4b-iGxDU8mIM6_WmJrXIOp0=" alt="IMG AREA"/>
                </div>

            </div>
        </>
    )
}

export default ServiceCard;