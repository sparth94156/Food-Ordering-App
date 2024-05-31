import { MENU_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const useRestaurantMenu = (resId) => {

    const [menuInfo,setMenuInfo] = useState(null)

    const fetchData = async () => {
        const response = await fetch(MENU_URL + resId);     // We should keep all the fetch APIs in a constant file.
        const json = await response.json();
        setMenuInfo(json); // We set the menuInfo with the json data after getting the data from the api call.
    }
    useEffect(() => {
        fetchData();
    },[]);  // call after initial render

    return menuInfo;
}

export default useRestaurantMenu;