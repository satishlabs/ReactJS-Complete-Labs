import { Component } from "react";
import { MyCourseConsumer } from "./CourseContext";

//1. Import the consume from context
import { MyStudentConsumer } from "./StudentContext";


class TestComponent extends Component{
    render(){
        return(
                      //2. Wrap the consumer
                <MyStudentConsumer>
                    {
                        mystudentData =>{
                            const{studentId,studentName,email,phone} = mystudentData;
                            return(
                                <MyCourseConsumer>
                                   {
                                    mycourseData =>{
                                        const{courseId,courseName,cost,trainer} = mycourseData;
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
                                                    <h3>Course Id: {courseId}</h3>
                                                    <h3>Course Name: {courseName}</h3>
                                                    <h3>Cost: {cost}</h3>
                                                    <h3>Trainer: {trainer}</h3>
                                                </div>
                                        </div>
                                        )
                                    }
                                   }
                                </MyCourseConsumer>
                               
                            )
                        }
                    }
                </MyStudentConsumer>
    
        );
    }
}
export default TestComponent;