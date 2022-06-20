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
        Course:{
            cid:"c-1002",
            couseName:"ReactJS",
            price:15000,
            trainer:"Satish"
        }
    }
    render(){
    
        console.log("I am Student");
        return(

           <div className="mystudent">
           <p>Student Details</p>
          <p>Sid: {this.state.sid}</p>
          <p>Sname: {this.state.sname}</p>
          <p>Email: {this.state.email}</p>
          <p>Phone: {this.state.phone}</p>
          <p>city: {this.state.city}</p>
           <Course mycid={this.state.Course.cid}
                    mycname = {this.state.Course.couseName}
                    myprice = {this.state.Course.price}
                    mytrainer = {this.state.Course.trainer}
           />
           </div>
        );
    }
}
export default Student;