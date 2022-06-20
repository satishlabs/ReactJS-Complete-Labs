import {
    Component
} from "react";
import "./Course.css";

class Course extends Component {
    state = {
        cid: "C-100",
        cname: "ReactJS",
        cost: 15000,
        trainer: "Satish Prasad",
        showCourse: false
    }
    showCourseInfo = () => {
        console.log("Button is Clicked");
        let courseFlag = this.state.showCourse;

        //Do not mutate state directly
        //Use setState() to change the State
        // this.state.showCourse = !courseFlag;

        this.setState({
            showCourse: !courseFlag
        });
    }

    render() {
        let mycourseInfo = null;

        if (this.state.showCourse === true) {
            mycourseInfo = ( <
                div className = "mycourse" >
                <
                p > Cid: {
                    this.state.cid
                } < /p> <
                p > CourseName: {
                    this.state.cname
                } < /p> <
                p > Cost: {
                    this.state.cost
                } < /p> <
                p > Trainer: {
                    this.state.trainer
                } < /p> <
                /div>
            )
        }

        console.log("I am course");
        return ( <
            div >
            <
            button className = "mybutton"
            onClick = {
                this.showCourseInfo
            } > ShowCourseInfo < /button> {
                mycourseInfo
            } <
            /div>

        )
    }
}
export default Course;