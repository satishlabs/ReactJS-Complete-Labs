import { Component } from "react";

//1. Import the consume from context
import { MyStudentConsumer } from "./StudentContext";

class StudentComponent1 extends Component{
    render(){
        return(
                      //2. Wrap the consumer
                <MyStudentConsumer>
                    {
                        mystudentData =>{
                            const{studentId,studentName,email,phone} = mystudentData;
                            return(
                                <div className="container">
                                    <br/>
                                    <b><u>
                                        <h2 className="text-center">Student Info1</h2>
                                        </u></b>
                                        <br/>
                                        <div>
                                           <h3>Student Id: {studentId}</h3>
                                            <h3>Student Name: {studentName}</h3>
                                            <h3>Email Id: {email}</h3>
                                            <h3>Phone No: {phone}</h3>
                                        </div>
                                </div>
                            )
                        }
                    }
                </MyStudentConsumer>
    
        );
    }
}
export default StudentComponent1;