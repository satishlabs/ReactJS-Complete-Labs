import {
    Component
} from 'react';
import Course from '../course/Course';
import "./Student.css";

class Student extends Component {
    state = {
        sid: 101,
        sname: "Mahish",
        email: "manish@gmail",
        phone: 123445,
        city: "Bangalore",
        showStudent: false
    }

    showStudentInfo = () => {
        let showStudentFlag = this.state.showStudent;
        this.setState({
            showStudent: !showStudentFlag
        })
    }

    render() {
        let myStudentInfo = null;
        if (this.state.showStudent === true) {
            myStudentInfo = ( <
                div className = "mystudent" >
                <
                p > Student Details < /p> <
                p > Sid: {
                    this.state.sid
                } < /p> <
                p > Sname: {
                    this.state.sname
                } < /p> <
                p > Email: {
                    this.state.email
                } < /p> <
                p > Phone: {
                    this.state.phone
                } < /p> <
                p > city: {
                    this.state.city
                } < /p> <
                Course / >
                <
                /div>
            )
        }

        console.log("I am Student");
        return ( <
            div >
            <
            button className = "studentButton"
            onClick = {
                this.showStudentInfo
            } > ShowStudentInfo < /button> {
                myStudentInfo
            } <
            /div>
        );
    }
}
export default Student;