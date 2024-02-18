import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../component/body/config";

const useRestaurant = (id) => {

    const [restaurant, setrestaurant] = useState(null);


    useEffect(() => {
        getRestaurantinfo();
    }, [])

    async function getRestaurantinfo() {
        const data = await fetch(FETCH_MENU_URL + id)
        const json = await data.json();
        setrestaurant(json.data)
    }

    return restaurant
}

export default useRestaurant;