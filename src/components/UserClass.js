import React from "react";
import SubUser from "./subUser";

class UserClass extends React.Component{
    constructor(props){     // We pass in props using contructor
        super(props); 
        // Creating state variables
        this.state = {
            userInfo : {
                name: "Dummy",
                location: "default",
                id: 1234,
            },
            otherInfo : {
                company:"Dummy2",
                blog : "random",
                bio: 'hello react',
            }
        }

    }

    // Commit Phase
    async componentDidMount(){
        // API call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({             // Updating the state variables
            userInfo: json,
            otherInfo : json
        })

        // console.log(this.state.userInfo);   // this statement execute before the api call gets resolved
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        const {name,location,id} = this.state.userInfo;
        const {company, blog, bio} = this.state.otherInfo;
        return  (
            <div className="my-3">
                <h2 className="text-lg">User Details</h2>
                <img className="w-48" src="https://avatars.githubusercontent.com/u/12824231?v=4"/>
                <ul className="mt-5">
                    <li className="text-lg">Name: {name}</li>
                    <li className="text-lg">Location: {location}</li>
                    <li className="text-lg">ID: {id}</li>
                    <li className="text-lg">Company: {company}</li>
                    <li className="text-lg">Blog: {blog}</li>
                    <li className="text-lg">Bio: {bio}</li>
                </ul>
            </div>
        );
    }
}

export default UserClass;