import { CART_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ foodList }) => {

    const dispatch = useDispatch()

    const handleStoreItem = (item) => {
        dispatch(addItem(item))  // the pizza over here will is actually the action.payload ( It will create an object containing payload and will the pass it to the action parameter )
    }
    return (
        <div data-testid='foodItems' className="border-t-2 py-4 hover:bg-slate-10 flex">
            <div className="w-8/12 py-8 px-4 text-left ">
                <span className="font-bold text-xl">{foodList.info.name}</span><br />
                <span className="font-semibold">₹ {foodList.info.defaultPrice / 100 || foodList.info.price / 100}</span><br />
                {Object.keys(foodList.info.ratings.aggregatedRating).length === 0 ? (<div></div>) : (<span>★ {foodList.info.ratings.aggregatedRating.rating} ({foodList.info.ratings.aggregatedRating.ratingCountV2})</span>) }<br/>
                <span className="text-slate-500">{foodList.info.description}</span>
            </div>
            <div className="w-4/12 flex justify-center items-center">
                <div className="w-6/12 flex items-center justify-center rounded-md">
                    <img className="w-full rounded-md" src={CART_URL + foodList.info.imageId} />
                    <button className=" hover:bg-slate-200 absolute text-green-600 font-bold bg-white px-6 py-1 rounded-md mt-[150px] shadow-md" onClick={() => handleStoreItem(foodList)} >
                        ADD
                    </button>
                </div>
            </div>
        </div>

    )
}
export default ItemList;