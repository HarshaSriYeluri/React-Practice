import RestaurantCards, { withPromotedLabel } from "./RestaurantCards";
import ShimmerUI from "./ShimmerUI";
import { RESTAURANTS_URL, STAR_ICON } from "./utils/constants"
import { useEffect, useState } from "react";

const RestaurantsList = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("Search Restaurant Name");
    const [restaurantName, setRestaurantName] = useState("");
    const [nextPage, setNextPage] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCards);

    const fetchData = async () => {
        const response = await fetch(RESTAURANTS_URL);
        const json = await response.json();
        setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setNextPage(json?.data?.pageOffset?.nextOffset);
    }

    const handleScroll = async (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollHeight - scrollTop - clientHeight <= 0) {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("origin", "https://www.swiggy.com");
            const myRequest = new Request("https://www.swiggy.com/dapi/restaurants/list/update", {
                method: "POST",
                body: JSON.stringify({
                    lat: 12.9715987,
                    lng: 77.5945627,
                    nextOffset: nextPage,
                    widgetOffset: {
                        NewListingView_category_bar_chicletranking_TwoRows: "",
                        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
                        Restaurant_Group_WebView_PB_Theme: "",
                        Restaurant_Group_WebView_SEO_PB_Theme: "",
                        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
                        inlineFacetFilter: "",
                        restaurantCountWidget: ""
                    },
                    filters: {},
                    seoParams: {
                        seoUrl: "https://www.swiggy.com/home",
                        pageType: "FOOD_HOMEPAGE",
                        apiName: "FoodHomePage"
                    },
                    page_type: "DESKTOP_WEB_LISTING",
                    _csrf: "718vcQkXryoZ-vEd0cE0RdslJV_ZUACGzu16ZquU"
                }),
                headers: myHeaders
            });
            const response = await fetch(myRequest);
            const json = await response.json();
            setNextPage(json?.data?.pageOffset?.nextOffset);
            setRestaurantList(restaurantList.concat([json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants]));
            setFilteredRestaurantList(filteredRestaurantList.concat([json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants]));
        }
    }

    const handleSearch = (e) => {
        if (e.target.value != '') {
            setSearchRestaurant('');
            setRestaurantName(e.target.value);
            setFilteredRestaurantList(restaurantList.filter((res) => res.info.name.toLowerCase().includes(e.target.value.toLowerCase())));
        } else {
            setSearchRestaurant("Search Restaurant Name");
            setRestaurantName('');
            setFilteredRestaurantList(restaurantList);
        }
    }

    const handleFilter = () => {
        const modifiedRestaurantList = restaurantList.filter((res) => res.info.avgRating >= 4.5);
        setRestaurantList(modifiedRestaurantList);
    }

    return restaurantList.length === 0 ? <ShimmerUI /> : (
        <div className="body">
            <div className="pickle-customization">
                <div className="pickle-search">
                    <input type="text" placeholder={searchRestaurant} value={restaurantName} onChange={handleSearch} />
                    <button type="submit">Search</button>
                </div>
                <div className="pickle-rating-filter" onClick={ handleFilter }>
                    { STAR_ICON }
                    <h4>4.5+</h4>
                </div>
            </div>
            {/* onScroll={handleScroll} */}
            <div className="pickle-cards">
                {filteredRestaurantList.map((res) => res.info.avgRating >= 4.5 ? <RestaurantCardPromoted  key={res.info.id} resProps={res} /> : <RestaurantCards key={res.info.id} resProps={res} />)}
            </div>
        </div>
    )
}

export default RestaurantsList;