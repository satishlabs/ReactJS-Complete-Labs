import React, { Component } from "react";

import {UPDATE_CNAME,UPDATE_PRICE,UPDATE_DURATION,UPDATE_TRAINER}  from "./courseType";

//1. create context object
const courseContext = React.createContext(null); 

    const myreducer =(currentState,action) =>{
        console.log("C","[courseContext - myreducer]");
        console.log("[courseContext - myreducer]",action.type,action.payload);
        switch(action.type){
            case UPDATE_CNAME:
             /*   let updateState ={
                    courseName:action.payload
                };
                return updateState;
                */
               return {
                courseName:action.payload
            };
            case UPDATE_PRICE:
               return {
                price:action.payload
            };
            case UPDATE_DURATION:
               return {
                duration:action.payload
            };
            case UPDATE_TRAINER:
               return {
                trainer:action.payload
            };
            default:
              return currentState
        }
    }

   export class MyCourseProvider extends Component{ 
     //2. Define the state Properties and Dispatch function
    state = { 
       courseId: "C-101",
       courseName: "Spring Boot",
       price: 10000,
       duration:"50 Hrs",
       trainer: "Satish Prasad",
       mydispatch:(action) =>{
        console.log("B","[courseContext - mydispatch]");
        this.setState(state =>myreducer(this.state,action));
       }
    } 
    render(){ 
        return(
            //3. Specify the Provider 
        <courseContext.Provider value={this.state}> 
            {this.props.children} 
        </courseContext.Provider> 
        ); 
    } 
   }

   //4. Export the consumer
   export const MyCourseConsumer = courseContext.Consumer;
