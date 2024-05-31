import { LOGO_URL as URL } from "../utils/constants";  // Named imports (enclosed n curly braces)
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useonlineStatus from "../utils/useonlineStatus";
import {LoginUser} from "../utils/loginUser";
import AppTheme from "../utils/appTheme";
import { useSelector } from "react-redux";
export const Header = () => {

  const {loginUserName} = useContext(LoginUser);

  // const [theme, setTheme] = useState(null);

  // subscribing to the store using Selector (useSelector)
  const cartItems = useSelector((store) => store.cart.items)

  const onlineStatus = useonlineStatus(); //Imported our custom hook
  // console.log("Header rendered");

  return (
    <div className="flex mx-2 my-2 px-2 justify-between border-[1.5px] border-[gray] rounded-lg ">
      <img className="w-40 mix-blend-color-burn" src={URL}></img>
      <div className="flex items-center pr-2 gap-8">
        <ul className="flex gap-8">
          <li data-testid='onlineStatus'>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/" id="item" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/About" id="item" className="hover:underline">About us</Link>
          </li>
          <li>
            <Link to="/Contact" id="item" className="hover:underline">Contact us</Link>
          </li>
          <li>
            <Link to="/login" id="item" className="hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:underline">Grocery</Link>
          </li>
          <li>
            <Link to='/cart' className="hover:underline font-semibold">Cart-({cartItems.length} Items)</Link> 
          </li>
          <li className="hover:underline cursor-pointer">
            Dark mode
          </li>
          <li>
            {loginUserName}
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Header;