import { useContext } from "react";
import { LoginUser } from "../utils/loginUser";

const Grocery = () => {
    const {loginUserName} = useContext(LoginUser);
    return (
        <div className="text-lg font-semibold">
            <h1>Hello! This is {loginUserName}</h1>
             <h2>This is the grocery section of our app</h2>
        <h3>List of Available items</h3>
        <ul>
            <li>Potato</li>
            <li>Mango</li>
            <li>Tomato</li>
        </ul>
        </div> 
    )
}

export default Grocery;