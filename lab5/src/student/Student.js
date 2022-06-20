import {
    Component
} from 'react';
import Course from '../course/Course';
import "./Student.css";

class Student extends Component {
   
    render(){
    
        console.log("I am Student");
        return(

           <div className="mystudent">
           <p>Student Details</p>
          <p>Sid: {this.props.mystudents.sid}</p>
          <p>Sname: {this.props.mystudents.sname}</p>
          <p>Email: {this.props.mystudents.email}</p>
          <p>Phone: {this.props.mystudents.phone}</p>
          <p>city: {this.props.mystudents.city}</p>
            <Course mycourses = {this.props.mystudents.Course}/>
           </div>
        );
    }
}
export default Student;