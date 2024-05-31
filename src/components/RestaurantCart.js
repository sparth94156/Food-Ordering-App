import { useContext } from "react";
import { LoginUser } from "../utils/loginUser";
import { CART_URL } from "../utils/constants";

const RestaurantCart = (props) => {
  const { resObj } = props; // Destructuring

  const { name, cuisines, areaName, avgRating, sla } = resObj?.info; // Option chaining

  // Using a context using useContext hook
    const {loginUserName} = useContext(LoginUser); // Here we provided the context to the specific component
  
  return (
    <div data-testid="ResCard" className=" m-4 w-[250px] border rounded-lg bg-slate-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] hover:bg-slate-200">
      <div className="w-full h-6/12">
        <img className=" w-full h-full h-6/12 rounded-lg rounded-b-none"
          src={
            CART_URL + resObj.info.cloudinaryImageId
          }>
        </img>
      </div>
      <div className="p-3 font-sans w-full h-6/12">
        <h2 className="font-bold text-lg">{name}</h2>
        <span>{cuisines.join(", ")}</span><br />
        <span>{areaName}</span><br />
        <span>{sla.slaString}</span><br />
        <button className=" my-3 px-4 py-1 rounded-lg bg-slate-500 text-white">{avgRating}</button><br/>
        <span data-testid='userName'>User: {loginUserName}</span>
      </div>
    </div>
  );
};

// Higher Order component
export const withDiscountLabel = (RestaurantCart) => {
  // The function call will pass to props
  return (props) => {
    return (
      <div>
        <label className="bg-white text-green-700 absolute px-2 py-1 rounded-md font-semi-bold shadow-md">Opened</label>
        <RestaurantCart {...props} />     {/* All the props received will be pass in to the RestaurantCart */}
      </div>
    );
  };
};

export default RestaurantCart;