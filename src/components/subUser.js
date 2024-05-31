import { Component } from "react";

class SubUser extends Component{
    constructor(props){
        super(props)
        console.log(this.props.name + " subclass constructor called")
    }
    componentDidMount(){
        console.log(this.props.name + " subclass did mount");
    } 
    render(){
        console.log(this.props.name + " subclass render called")
        return (
            <div className="subClass">
                <p>This is User subclass component</p>
            </div>
        )
    }
}

export default SubUser;