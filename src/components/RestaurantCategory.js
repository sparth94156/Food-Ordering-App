import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ category, showList, setshowIndex, setShowIndexClose }) => {

    const handleClick = () => {

        if(showList === true){
            setShowIndexClose() // Called the setShowIndexClose prop which updates the state to null
        }
        else{
            setshowIndex()  // Calling the setshowIndex prop
        }
    }
    return (
        <div className="w-full">
            {/* Header */}
            <div className="w-8/12 mx-auto my-7 cursor-pointer border-b-[30px] border-gray-200 shadow-lg">
                <div className="flex justify-between bg-slate-100 p-3 font-bold text-lg" onClick={handleClick}>
                    <span>{category.title} ({category.itemCards.length})</span>
                    <span>{showList ? "⬆️" : "⬇️"}</span>
                </div>
                {/* Body */}
                <div>
                    {
                        category.itemCards.map((item) =>
                            <div key={item.card.info.id}>
                                {/* Conditional Rendering */}
                                {showList ? <ItemList foodList={item?.card} /> : <div></div>}
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
export default RestaurantCategory;