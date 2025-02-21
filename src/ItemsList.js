import { IMAGE_URL } from "./utils/constants";
import { VEG_ICON, NON_VEG_ICON } from "./utils/constants";

const ItemsList = ({itemCard}) => {
    console.log(itemCard)
    const {name, price, imageId, itemAttribute: {vegClassifier}, ratings: {aggregatedRating: {rating, ratingCountV2}}} = itemCard.info;
    return (
        <div className="accordion-items">
            <div>
                <div>{vegClassifier === "VEG" ? VEG_ICON : NON_VEG_ICON}</div>
                <div>{name}</div>
                {rating && <div>{rating} <span>({ratingCountV2})</span></div>}
                <div>₹{price / 100}</div>
            </div>
            {imageId && <img src={IMAGE_URL + imageId} alt="item-image" />}
            <button className="add-btn">Add +</button>
        </div>
    )
}

export default ItemsList;