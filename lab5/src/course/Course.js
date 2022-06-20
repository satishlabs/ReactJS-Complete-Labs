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
                <p>Cid: {this.props.mycourses.cid}</p>
                <p>CourseName: {this.props.mycourses.courseName}</p>
                <p>Cost: {this.props.mycourses.price}</p>
                <p>Trainer: {this.props.mycourses.trainer}</p>
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