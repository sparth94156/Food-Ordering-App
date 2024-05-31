import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CartShimmer from "./CartShimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams(); // returns an object containing resId.

    const [showIndex, setshowIndex] = useState(null);

    const menuInfo = useRestaurantMenu(resId);  // custom hook(for modularity)

    if (menuInfo === null) return <CartShimmer />

    const { name, avgRating, costForTwoMessage, sla, cuisines } = menuInfo?.data?.cards[2]?.card?.card?.info;

    // const { itemCards } = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = menuInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)

    return (
        <div className="w-full my-3 px-3">
            <div className="w-full text-center my-3">
                <h2 className="text-2xl mb-3 font-bold">{name}</h2>
                <h3 className="text-lg font-semibold">{avgRating} ★ &#183; {costForTwoMessage}</h3>
                <p className="text-lg text-orange-600 font-semibold underline cursor-pointer">{cuisines.join(",")}</p>
                <p className="font-semibold">{sla.slaString}</p>
            </div>
            <div className="text-center">
            {
                // Controlled Component
                categories.map((c, index) => 
                <div key={c.card.card.title}>
                    <RestaurantCategory category = {c?.card?.card}
                    showList={index === showIndex ? true : false}
                    setshowIndex = {() => setshowIndex(index)}
                    setShowIndexClose = {() => setshowIndex(null)}/>   {/* For toggle up the accordian when we click on it again */} 
                </div>)
            }
            </div>   
                
        </div>
    )
}
export default RestaurantMenu;