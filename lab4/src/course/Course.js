import {
    Component
} from "react";
import "./Course.css";

class Course extends Component {
    state = {
        showCourse: false
    }
    showCourseInfo = () => {
        let courseFlag = this.state.showCourse;
        this.setState({
            showCourse: !courseFlag
        });
    }

    render(){
        let mycourseInfo = null;

        if(this.state.showCourse ===true){
            mycourseInfo = (
                <div className="mycourse">
                <p>Cid: {this.props.mycid}</p>
                <p>CourseName: {this.props.mycname}</p>
                <p>Cost: {this.props.myprice}</p>
                <p>Trainer: {this.props.mytrainer}</p>
             </div>
            )
        }

        console.log("I am course");
        return(
            <div>
            <button className="mybutton" onClick={this.showCourseInfo}>ShowCourseInfo</button>
                    {mycourseInfo}
            </div>
         
        )
    }
}
export default Course;