import { Component } from "react";

//1. Import the consume from context
import { MyCourseConsumer } from "./CourseContext";

import {UPDATE_CNAME,UPDATE_PRICE,UPDATE_DURATION,UPDATE_TRAINER}  from "./courseType";

class CourseComponent extends Component{
    
    updateCourseName =(updatedCname,mydispatch) =>{
        console.log("A","[CourseComponent - updateCourseName]",updatedCname);
        mydispatch({
            type:UPDATE_CNAME,
            payload:updatedCname
        });

    }
    updatePrice =(updatedPrice,mydispatch) =>{
        console.log("A","[CourseComponent - updatePrice]",updatedPrice);
        mydispatch({
            type:UPDATE_PRICE,
            payload:updatedPrice
        });
        
    }
    updateDuration =(updatedDuration,mydispatch) =>{
        console.log("A","[CourseComponent - updateDuration]",updatedDuration);
        mydispatch({
            type:UPDATE_DURATION,
            payload:updatedDuration
        });

    }
    updateTrainer =(updatedTrainer,mydispatch) =>{
        console.log("A","[CourseComponent - updateTrainer]",updatedTrainer);
        mydispatch({
            type:UPDATE_TRAINER,
            payload:updatedTrainer
        });

    }

    render(){
        return(
                      //2. Wrap the consumer
                <MyCourseConsumer>
                    {
                        mycourseData =>{
                            const {courseId,courseName,price,duration,trainer} = mycourseData;
                            const {mydispatch} =mycourseData;
                            return(
                                <div className="container">
                                    <br/>
                                    <b><u>
                                        <h2 className="text-center">Course Info</h2>
                                        </u></b>
                                        <br/>
                                        <div>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td><h4>Course Id: {courseId}</h4></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td><h4>Course Name: {courseName}</h4></td>
                                                        <td><button onClick={this.updateCourseName.bind(this,"ReactJS",mydispatch)} className="btn btn-success">Update Course Name</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <h4>Price : {price}</h4></td>
                                                        <td><button onClick={this.updatePrice.bind(this,20000,mydispatch)} className="btn btn-success">Update Price</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td><h4>Duration : {duration}</h4></td>
                                                        <td><button onClick={this.updateDuration.bind(this,"70 Hrs",mydispatch)} className="btn btn-success">Update Duration</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <h4>Trainer : {trainer}</h4></td>
                                                        <td><button onClick={this.updateTrainer.bind(this,"Satish Kumar",mydispatch)} className="btn btn-success">Update Trainer</button></td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                        </div>
                                </div>
                            )
                        }
                    }
                </MyCourseConsumer>
    
        );
    }
}
export default CourseComponent;