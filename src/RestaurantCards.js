import { IMAGE_URL, STAR_ICON } from "./utils/constants";
import { Link } from "react-router";

const RestaurantCards = (props) => {
    const {cloudinaryImageId, name, avgRating, sla: { deliveryTime }, cuisines, locality, id} = props.resProps.info;
    return (
        <div className="pickle-card">
            <img className="pickle-image" src={IMAGE_URL + cloudinaryImageId} alt="food-item" />
            <h3 className="pickle-name"><Link to={"/restaurants/" + id}>{name}</Link></h3>
            <div className="pickle-ratings">
                { STAR_ICON }
                <div><span>{avgRating}</span>{deliveryTime} minutes</div>
            </div>
            <h4 className="pickle-ingrediants">{cuisines.join(", ")}</h4>
            <p className="pickle-quantity">{locality}</p>
        </div>
    )
};

export default RestaurantCards;