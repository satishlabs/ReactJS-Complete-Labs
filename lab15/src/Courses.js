import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Courses = (props) => { 
    const [coursesState, setCoursesState] = useState({ 
    trainerName: "Srinivas Dande", 
    trainerEmail: "sri@jlc.com", 
    mycourseList: [ 
    { cid: 101, cname: "Angular 7", price: 15000 }, 
    { cid: 102, cname: "React JS", price: 15000 }, 
    { cid: 103, cname: "Java Full Stack", price: 36000 }, 
    { cid: 104, cname: "Spring MicroServices", price: 22000 }, 
    { cid: 105, cname: "DevOps", price: 15000 }, 
    ], 
    });

    useEffect(() => { 
        console.log("[Courses] - 1st - useEffect()"); 
        //Http Calls 
        //Timiers etc 
        return () => { 
        console.log("[Courses] - 1st - useEffect() - Cleanup"); 
        //Cleanup Work here 
        }; 
        }); 
       

        useEffect(() => { 
            console.log("[Courses] - 2nd - useEffect()"); 
            //Http Calls 
            //Timiers etc 
            return () => { 
            console.log("[Courses] - 2nd - useEffect() - Cleanup"); 
            //Cleanup Work here 
            }; 
            }, []); 

            useEffect(() => { 
            console.log("[Courses] - 3rd - useEffect()"); 
            //Http Calls 
            //Timiers etc 
            return () => { 
            console.log("[Courses] - 3rd - useEffect() - Cleanup"); 
            //Cleanup Work here 
            }; 
            },[]);

            const showAllCourses = () => { 
                console.log("showAllCourses - Called"); 
                setCoursesState({ 
                //trainerName: "Srinivas Dande", 
                //trainerEmail: "srinivas@jlc.com", 
                mycourseList: [ 
                { cid: 101, cname: "Angular 7", price: 12000 }, 
                { cid: 102, cname: "React JS", price: 12000 }, 
                { cid: 104, cname: "Spring MicroServices", price: 15000 }, 
                ], 
                }); 
                };

                let courseListToDisplay = coursesState.mycourseList.map( 
                    (mycourse, myindex) => ( 
                    <tr key={myindex}> 
                    <td> 
                    <h6> {mycourse.cid}</h6> 
                    </td> 
                    <td> 
                    <h6> {mycourse.cname}</h6> 
                    </td> 
                    <td> 
                    <h6>{mycourse.price}</h6> 
                    </td> 
                    </tr> 
                    ) 
                    ); 
                   

                    return ( 
                        <div className="container"> 
                        <div className="container" style={{ float: "right" }}> 
                        <button className="btn btn-primary mybutton" onClick={showAllCourses}> 
                        Show All Courses 
                        </button> 
                        </div> 
                        <div className="Container"> 
                        <table className="table table-striped table-light table-bordered"> 
                        <tbody>{courseListToDisplay}</tbody> 
                        </table> 
                        </div> 
                        <h2> Trainer Name : {coursesState.trainerName}</h2> 
                        <h2> Trainer Email : {coursesState.trainerEmail}</h2> 
                        </div> 
                        ); 
                       }; 
                       export default Courses;