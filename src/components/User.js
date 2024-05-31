import { useEffect, useState } from "react";

const User = () => {    // Destructuring 

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json)
    }

    useEffect(() => {

        fetchData()
       
        // const timer = setInterval(()=> {
        //     console.log("Namaste React")
        // },1000)

        //cleanup function(when the component unmounts)
        return () => {
            clearInterval(timer);
        }
    },[]);

    const {name} = json.name;   // Don't know why the error is shown here

    return (
        <div className="user-card">
            <h2>User Details</h2>
            <ul>
                <li>Name: "default"</li>
                <li>Location: 00</li>
                <li>Email: xyz</li>
            </ul>
        </div>
    )
}

export default User;