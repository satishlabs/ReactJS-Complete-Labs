import { Component } from "react";

class MyCourses extends Component{
    state = { 
        trainerName:"Srinivas Dande", 
        trainerEmail:"sri@jlc.com", 
        mycourseList : [ 
        {cid:101,cname:"Angular 7",price:15000,active:true}, 
        {cid:102,cname:"React 16",price:15000,active:true}, 
        {cid:103,cname:"Java FSD",price:35000,active:false}, 
        {cid:104,cname:"MicroServices",price:25000,active:true},
        {cid:105,cname:"DevOps",price:15000,active:false}, 
 ] 
 }; 

 showActiveCourses = ()=> { 
    console.log("showActiveCourses - called"); 
    let activeCourses = this.state.mycourseList.filter(mycourse => mycourse.active === true); 
    // 3 properties 
    this.setState({ 
    trainerEmail:"srinivas@jlc.com", 
    mycourseList : activeCourses 
    }); 
    //setState() merges the new State with Current State 
    // 3 properties 
    } 
   

    showAllCourses = ()=> { 
        console.log("showAllCourses - called"); 
        let allCourses = [ 
        {cid:101,cname:"Angular 7",price:15000,active:true}, 
        {cid:102,cname:"React 16",price:15000,active:true}, 
        {cid:103,cname:"Java FSD",price:35000,active:false}, 
        {cid:104,cname:"MicroServices",price:25000,active:true}, 
        {cid:105,cname:"DevOps",price:15000,active:false}, 
        ]; 
        // 3 properties 
        this.setState({ 
        trainerEmail:"satish@gmail", 
        mycourseList : allCourses 
        }); 
        //setState() merges the new State with Current State 
        // 3 properties
        } 
        componentDidMount(){ 
        this.showAllCourses(); 
        } 
       
        render() { 
            let courseListToDisplay = this.state.mycourseList.map( 
            (mycourse) => ( 
            <tr> 
            <td> <h6> {mycourse.cid} </h6></td> 
            <td> <h6> {mycourse.cname} </h6></td> 
            <td> <h6> {mycourse.price} </h6></td> 
            <td> <h6> {mycourse.active} </h6></td> 
            </tr> 
            ) 
            ); 
        
        return(
            <div className="container-fluid">
                <div className="container-fluid">
                    <button onClick={this.showAllCourses} className="btn btn-primary mybutton ">Show All Courses</button>
                    <button onClick={this.showActiveCourses} className="btn btn-success mybutton ">Show Active Courses</button>
                </div>
                <br/>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>CID</th>
                            <th>Cname</th>
                            <th>Trainer</th>
                            <th>Price</th>
                            <th>IsOnline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseListToDisplay}
                    </tbody>
                </table>
                <h3>Trainer Name:{this.state.trainerName}</h3>
                <h3>Trainer Email:{this.state.trainerEmail}</h3>
               
            </div>
        )
    }
}
export default MyCourses;