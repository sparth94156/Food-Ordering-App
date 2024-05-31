import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../utils/userSlice";

const Contact = () => {

    const dispatch = useDispatch();
    const userCart = useSelector((state) => state.user);

    if(userCart.isLoading){
        return <h1>Loading...</h1>;
    }
    return (
        <div className="m-4">
            <h1 className="text-lg font-semibold">This is the contact page</h1>
            <h2 className="text-lg font-semibold">Email us at reactpractice@gmail.com</h2>
            <button className="border border-gray-600 px-2 py-1 my-4 bg-slate-200 rounded-md" onClick={() => dispatch(fetchData())}>Fetch Data</button>

            {
                userCart.data && userCart.data.map((item) => 
                <li key={item.id}>
                    {item.title}
                </li>
                )
            }
        </div>
    )
}
export default Contact;