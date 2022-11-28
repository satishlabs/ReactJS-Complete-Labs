import React, { Component } from "react";

//1. create context object
const studentContext = React.createContext(null); 

   export class MyStudentProvider extends Component{ 
     //2. Define the state
    state = { 
       studentId: 101,
       studentName: "Satish",
       email: "satish@gmail",
       phone: 12345,
    } 
    render(){ 
        return(
            //3. Specify the Provider 
        <studentContext.Provider value={this.state}> 
            {this.props.children} 
        </studentContext.Provider> 
        ); 
    } 
   }

  // export const MyStudentContext = studentContext;

   //4. Export the consumer
   export const MyStudentConsumer = studentContext.Consumer;
