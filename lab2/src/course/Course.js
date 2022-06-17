import { Component } from "react";
import "./Course.css";

class Course extends Component{
    state = {
        cid:"C-100",
        cname:"ReactJS",
        cost:15000,
        trainer:"Satish Prasad"
    }
    render(){
        console.log("I am course");
        return(
            <div className="mycourse">
               <p>Cid: {this.state.cid}</p>
               <p>CourseName: {this.state.cname}</p>
               <p>Cost: {this.state.cost}</p>
               <p>Trainer: {this.state.trainer}</p>
            </div>
        )
    }
}
export default Course;