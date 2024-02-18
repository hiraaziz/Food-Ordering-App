import { useState, useEffect } from "react";
import { FETCH_RESTAURANTS_URL } from "../component/body/config";

function useAllRestaurant(setfilteredRestaurants) {

    const [allRestaurants, setallRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();

    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setallRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
            // Handle the error here, such as displaying an error message to the user
        }
    }
    return allRestaurants
}
export default useAllRestaurant