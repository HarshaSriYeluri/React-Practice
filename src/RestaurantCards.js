import { IMAGE_URL, STAR_ICON } from "./utils/constants";
import { Link } from "react-router";

const RestaurantCards = (props) => {
    const {cloudinaryImageId, name, avgRating, sla: { deliveryTime }, cuisines, locality, id} = props.resProps.info;
    return (
        <div className="pickle-card">
            <img className="pickle-image" src={IMAGE_URL + cloudinaryImageId} alt="food-item" />
            <h3 className="pickle-name"><Link to={"/restaurants/" + id} state={{ image: cloudinaryImageId }}>{name}</Link></h3>
            <div className="pickle-ratings">
                &#11088;
                <div><span>{avgRating}</span>{deliveryTime} minutes</div>
            </div>
            <h4 className="pickle-ingrediants">{cuisines.join(", ")}</h4>
            <p className="pickle-quantity">{locality}</p>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label>Best</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCards;