import "./WorkerCard.css";
const WorkerCard = () =>{
    return(
        <>
            <div className="cardContainer">
                <div className="cardHeader">
                    <div className="workerDetails">
                        <p>Giga Chad</p>
                        <span className="workerReview">
                            <span className="iconsRating"> 
                                <i class="fa-regular fa-star fa star1"></i>
                                <i class="fa-regular fa-star fa star2"></i>
                                <i class="fa-regular fa-star fa star3"></i>
                                <i class="fa-regular fa-star fa star4"></i>
                                <i class="fa-regular fa-star fa star5"></i>
                            </span>
                            <p>1k Reviews</p>
                        </span>
                    </div>
                    <div className="workerPfp">
                        <img src="https://wallpapercave.com/wp/wp9917279.jpg"/>
                    </div>
                </div>
                <div className="cardContent">
                    <p>Services Offered</p>
                    <ul className="serviceList">
                        <li>Newspaper Service</li>
                        <li>Magazine Service</li>
                    </ul>
                </div>
                <div className="cardFooter">
                    <button className="contactButton">
                        CONTACT
                    </button>
                </div>
            </div>
        </>
    )
}
export default WorkerCard;