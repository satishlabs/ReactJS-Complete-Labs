import React, { useState } from "react";


const MyCourses = () =>{

    //const [state,setState] = useState(initialState);
    //1. Using the useState() ReactHook

    const[courseState,setCourseState] = useState(
        {
            trainerName:"Satish Prasad",
            trainerEmail:"satish.prasad@outlook.in",
            mycourseList:[
                {cid:101,cname:"Angular",price:15000,active:true},
                {cid:102,cname:"React JS",price:15000,active:true},
                {cid:103,cname:"JAVA FSD",price:35000,active:false},
                {cid:104,cname:"Microservices",price:25000,active:true},
                {cid:105,cname:"DevOps",price:15000,active:false},
            ]
        }
    );
    
    const showActiveCourses = () =>{
        console.log("showActiveCourses - Called");
        let activeCourses = courseState.mycourseList.filter(mycourse =>mycourse.active===true);

        //3 Properties
        setCourseState({
            trainerEmail:"satish@gmail.com", 
            mycourseList: activeCourses
        });
        //setCourseState() replaces the new State with Current State
        //2 Properties
    }

    const showAllCourses = () =>{
        console.log("showAllCourses - Called");

        let allCourses = [
            {cid:101,cname:"Angular",price:15000,active:true},
            {cid:102,cname:"React JS",price:15000,active:true},
            {cid:103,cname:"JAVA FSD",price:35000,active:false},
            {cid:104,cname:"Microservices",price:25000,active:true},
            {cid:105,cname:"DevOps",price:15000,active:false},
        ];

        //3 Properties
        setCourseState({
            trainerName:"Satish Kumar",
            trainerEmail:"prasadsatish@gmail",
            mycourseList:allCourses
        });

        //useState() Hook replaces the new State with current state
        //2 Properties
    }

    let mycourseListToDisplay = courseState.mycourseList.map(
        (mycourse)=>(
            <tr>
                <td><h6>{mycourse.cid}</h6></td>
                <td><h6>{mycourse.cname}</h6></td>
                <td><h6>{mycourse.price}</h6></td>
                <td><h6>{mycourse.active}</h6></td>
            </tr>
        )
    );

    let trainerInfo = null;
    if(courseState.trainerName){
        trainerInfo = (<h3>Trainer Name: {courseState.trainerName}</h3>);
    }

    return(
        <div className="container">
            <div className="container">
                <button onClick={showAllCourses} className="btn btn-success">Show All Courses</button>
                <button onClick={showActiveCourses} className="btn btn-success">Show Active Courses</button>
            </div>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Price</th>
                        <th>Is Active</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {mycourseListToDisplay}
                </tbody>
            </table>
            {trainerInfo}
            <h3>Trainer Email: {courseState.trainerEmail}</h3>
        </div>
    )
}

export default MyCourses;