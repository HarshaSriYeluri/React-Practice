import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { RESTAURANT_DATA_URL, IMAGE_URL } from "./utils/constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantItems = () => {
    useEffect(() => {
        fetchData();
    }, [])
    const [ restaurantInfo, setRestaurantInfo ] = useState('');
    const [ menuList, setMenuList ] = useState('');
    const [ filteredVegList, setFilteredVegList ] = useState('');
    const [ isVeg, setIsVeg ] = useState(false)
    const { resId } = useParams();
    const { state } = useLocation();
    const { image } = state || {};

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_DATA_URL.replace('$restaurantId$', resId));
        const json = await response.json();
        setRestaurantInfo(json?.data?.cards[2]?.card?.card?.info); // object
        setMenuList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards); // list
        setFilteredVegList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    return (!restaurantInfo) ? <ShimmerUI /> : (
        <div>
            <img className="restaurant-image" src={IMAGE_URL + image} alt="menu-items" />
            <div>{restaurantInfo.name}</div>
            <div>{restaurantInfo.avgRating} - {restaurantInfo.costForTwoMessage}</div>
            <div>{restaurantInfo.locality}</div>
            <div>{restaurantInfo.cuisines.join(", ")}</div>

            <label className="switch">
                <input type="checkbox" onChange={(e)=>{
                    setIsVeg(e.currentTarget.checked);
                    setFilteredVegList(menuList);
                }}/>
                <span className="slider"></span>
            </label>

            {
                filteredVegList.map((item, index) => {
                    if (item.card.card.title && item.card.card.itemCards && Array.isArray(item.card.card.itemCards)) {
                        return (
                            <div key={"menu-" + index}>
                                <h1>{item.card.card.title}</h1>
                                {item.card.card.itemCards.map((menuItem) => {
                                    const isVegItem = menuItem.card.info.itemAttribute.vegClassifier === 'VEG';
                                    if (isVeg && !isVegItem) {
                                        return null;
                                    }
                                    return (
                                        <div key={menuItem.card.info.id} className="menu-item-list">
                                            <img src={IMAGE_URL + menuItem.card.info.imageId} alt="menu-items" />
                                            <p>{menuItem.card.info.name} ({menuItem.card.info.itemAttribute.vegClassifier}) - Rs.{menuItem.card.info.price / 100}/-</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }
                    return null;
                })
            }
        </div>
    )
}

export default RestaurantItems;