import { Component } from "react";

class Hai extends Component{
    static displayName="MyHaiComponent";

    constructor(props){
        super(props);
        console.log(1,"Hai - constructor()");
        this.state = {

        }
    }

    static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"Hai - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log(4,"Hai - componentDidMount()");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Hai - shouldComponentUpdate()");
        return false;
    }

    getSnapshotBeforeUpdate(prevPorps,prevState){
        console.log("Hai - getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate(prevPorps,prevState,mysnapshot){
        console.log("Hai - componentDidUpdate()");
    }

    componentWillUnmount(){
        console.log(4,"Hai - componentWillUnmount()");
    }

    render(){
        console.log(3,"Hai - render()");
        return(
            <div className="container">
            <h3 className="text-center">I am Hai Component</h3>
            <h4>My Color: {this.props.mycolor}</h4>
            </div>
        );
    }
}
export default Hai;