import { Component } from "react";
import Hai from "./Hai";

class Hello extends Component{
    //displayName is a static variable
    static displayName= "MyHelloComponent";

    constructor(props){
        super(props);
        console.log(1,"Hello - construcotr()")
        this.state = {
           message:"Ok Guys" 
        }
    }

    static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"Hello - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log(4,"Hello - componentDidMount()");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Hello - shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(prevPorps,prevState){
        console.log("Hello - getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate(prevPorps,prevState,mysnapshot){
        console.log("Hello - componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log(4,"Hello - componentWillUnmount()");
    }

    render(){
        console.log(3,"Hello - render()");
    
        return(
            <div className="container">
                <h3>I am Hello Component !!</h3>
                <h4>My Trainer: {this.props.mytrainer}</h4>
                <br/>
                <Hai mycolor="Red"/>
            </div>
        );
    }
}
export default Hello;