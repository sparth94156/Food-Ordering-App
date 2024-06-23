import RestaurantCart, { withDiscountLabel } from "./RestaurantCart";
import { useContext, useEffect, useState } from "react"; // Named import 
import { Link } from "react-router-dom";
import useonlineStatus from "../utils/useonlineStatus";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import { LoginUser } from "../utils/loginUser";

const Body = () => {

  const [filteredList, setfilteredList] = useState([]);

  const [searchText, setsearchText] = useState(""); //Initially the searchbox is empty

  // console.log("body rendered");

  const status = useonlineStatus(); // Custom hook for online status

  const restaurantList = useRestaurantList();    // Custom hook for api call

  // Enhanced Restaurant Cart
  const DiscountedRestaurantCart = withDiscountLabel(RestaurantCart);

  const {loginUserName, setloginName} = useContext(LoginUser);  // Using the LoginUser context

  useEffect(() => {
    setfilteredList(restaurantList)
  }, [restaurantList])

  // if(status === false) return <h1>OOPS! Looks like you've lost your Internet </h1>;


  //Conditional rendering
  if (restaurantList.length === 0) {
    return (
      <Shimmer />
    )
  }

  // we can also use ternary operator to combine it in one line
  return (
    <div className="mt-5 p-5">
      <div className="flex mb-3 gap-8 justify-center">
        <input data-testid="searchInput" className="border border-solid border-slate-600 rounded-md outline-none placeholder: pl-3 w-80" type="text" placeholder="Search" value={searchText} onChange={(e) => {
          setsearchText(e.target.value)
        }}>
        </input>
        <button data-testid="searchBtn" className="px-4 py-2 border border-slate-600 rounded-md" onClick={() => {
          const filtersearchList = restaurantList.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

          setfilteredList(filtersearchList); // Update the copied list 
        }}>
          Search
        </button>
        <button className=" px-4 py-2 border border-slate-600 rounded-md"
          onClick={() => {
            const filteredList = restaurantList.filter(res => res.info.avgRating >= 4);

            setfilteredList(filteredList);
          }
          }>
          Top Ratings
        </button>
          <input data-testid='userInput' className="border border-gray-600 outline-none rounded-md px-2" value={loginUserName} placeholder="Username" onChange={(e) => setloginName(e.target.value)}></input>
      </div>
      <div className="flex flex-wrap justify-between">
        {
          filteredList.map((restaurant) => (
            <Link 
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {
                (restaurant.info.isOpen) ? 
                (<DiscountedRestaurantCart resObj={restaurant} />) :
                (<RestaurantCart resObj={restaurant} />)
              }
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;

