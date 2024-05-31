import UserClass from "./UserClass";
import React, {Component} from "react"; 
import { LoginUser } from "../utils/loginUser";

class About extends Component{

    constructor(props){
        super(props);
        // console.log("Parent Constructor Called");
    }
    // componentDidMount(){
    //     console.log("Parent Did Mount")
    // }
    // componentWillUnmount(){
    //     console.log("component Unmounted")
    // }
    render(){
        // console.log("Parent render called");
        return (
            <div className="m-5">
                <h1 className="text-4xl font-semibold my-4">This is the about section</h1>
                <h2 className="text-2xl">This is our react practice app</h2>
                <LoginUser.Consumer>
                    {/* the function automatically takes loginUser as an argument */}
                    {({loginUserName}) => <h2 className="font-semibold my-3">{loginUserName}</h2>}
                </LoginUser.Consumer>
                {/* <UserClass />  Here the props will be passed in as an object to the render function */}
            </div>
        )
    }
}

export default About;