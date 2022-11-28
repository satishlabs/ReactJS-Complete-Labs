import { Component } from "react";

//1. Import the consume from context
import { MyStudentConsumer } from "./StudentContext";

class StudentComponent extends Component{
    render(){
        return(
                      //2. Wrap the consumer
                <MyStudentConsumer>
                    {
                        mystudentData =>{
                            return(
                                <div className="container">
                                    <br/>
                                    <b><u>
                                        <h2 className="text-center">Student Info</h2>
                                        </u></b>
                                        <br/>
                                        <div>
                                           <h3>Student Id: {mystudentData.studentId}</h3>
                                            <h3>Student Name: {mystudentData.studentName}</h3>
                                            <h3>Email Id: {mystudentData.email}</h3>
                                            <h3>Phone No: {mystudentData.phone}</h3>
                                        </div>
                                </div>
                            )
                        }
                    }
                </MyStudentConsumer>
    
        );
    }
}
export default StudentComponent;