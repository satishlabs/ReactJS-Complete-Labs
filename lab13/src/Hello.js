import { Component } from "react";

class Hello extends Component{
    //displayName is a static variable
    static displayName= "MyHelloComponent";
    static defaultProps = {
        mytrainer:"Srinivas Dande",
        mycolor:"Red"
    }

    constructor(props){
        super(props);
        console.log("Hello - construcotr()")
        this.state = {
           message:"Ok Guys" 
        }
    }

    render(){
        console.log(1,"Hello - render()");
        console.log(2,"Hello - ",Hello.displayName);
        console.log(3,"Hello - ",Hello.defaultProps);
        console.log(4,"Hello - ",this.state);
        console.log(5,"Hello - ",this.props);
        return(
            <div className="container">
                <h3>I am Hello Component !!</h3>
                <h4>My Trainer: {this.props.mytrainer}</h4>
                <h4>My Color: {this.props.mycolor}</h4>
            </div>
        );
    }
}
export default Hello;