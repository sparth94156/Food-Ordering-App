import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="font-bold text-center text-xl m-4 p-4">
            Cart
            <button className="bg-gray-600 text-white mx-4 p-2 rounded-md" onClick={handleClearCart}>
                Clear Cart
            </button>
            <div className="w-8/12 mx-auto my-3">
                {cartItems.map(item => (
                    <div className="text-sm font-normal">
                    <ItemList key ={item.info.id} foodList={item}/>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Cart;