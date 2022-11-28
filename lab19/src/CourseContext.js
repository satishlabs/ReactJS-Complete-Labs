import React, { Component } from "react";

//1. create context object
const courseContext = React.createContext(null); 

   export class MyCourseProvider extends Component{ 
     //2. Define the state
    state = { 
       courseId: "C-101",
       courseName: "Spring Boot Microservices",
       cost: 18000,
       trainer: "Satish Prasad"
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
