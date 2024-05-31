import {useRouteError} from "react-router-dom";
const Error = () => {
    const err = useRouteError();    // A React hook that gives us the specific routing error information(Returns an object) 

    console.log(err)
    return (
        <div className="m-3 p-2">
            <h2 className="text-3xl">Oops!!</h2>
            <h2 className="text-xl">Something went wrong!!!</h2>
            <h2>{err.status } {err.statusText}</h2>
            <h2>{err.data}</h2>
        </div>
    )
}
export default Error;