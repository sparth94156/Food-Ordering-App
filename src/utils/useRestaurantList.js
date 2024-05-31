import { useState, useEffect } from "react";

const useRestaurantList = () => {

    const [restaurantList, setrestaurantList] = useState([]);  

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
    
        // console.log(json)
    
        setrestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      }
      useEffect(() => {
        fetchData();
      }, []);

      return restaurantList;
}

export default useRestaurantList;