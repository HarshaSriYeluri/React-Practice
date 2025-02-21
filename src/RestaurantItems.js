import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { IMAGE_URL, RESTAURANT_DATA_URL } from "./utils/constants";
import ShimmerUI from "./ShimmerUI";
import useFetch from "./utils/useFetch";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantItems = () => {
    const [ restaurantInfo, setRestaurantInfo ] = useState('');

    const [ filteredVegList, setFilteredVegList ] = useState([]);
    const [ isVeg, setIsVeg ] = useState(false);
    const { resId } = useParams();
    const { state } = useLocation();
    const { image } = state || {};

    const [menuList] = useFetch(RESTAURANT_DATA_URL.replace('$restaurantId$', resId)); //custom Hook

    useEffect(() => {
        if (menuList) {
            const filteredData = menuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => card.card.card.title);
            setFilteredVegList(filteredData);
            setRestaurantInfo(menuList?.cards[2]?.card?.card?.info); // object
        }
    }, [menuList]);

    const handleVegToggle = (e) => {
        setIsVeg(!isVeg);
    }
    
    return (restaurantInfo) ? (
        <div>
            <img className="restaurant-image" src={IMAGE_URL + image} alt="menu-items" />
            <div>{restaurantInfo.name}</div>
            <div>{restaurantInfo.avgRating} - {restaurantInfo.costForTwoMessage}</div>
            <div>{restaurantInfo.locality}</div>
            <div>{restaurantInfo.cuisines.join(", ")}</div>

            <label className="switch">
                <input type="checkbox" onChange={handleVegToggle}/>
                <span className="slider"></span>
            </label>
            { filteredVegList.map((item) => <RestaurantCategory key={item.card.card.title} isvegSel={isVeg} resItem={item.card.card}/>) }
        </div>
    ): <ShimmerUI />
}

export default RestaurantItems;