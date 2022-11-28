
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MyStudentProvider } from './StudentContext';
import StudentComponent from './StudentComponent';
import StudentComponent1 from './StudentComponent1';
import { MyCourseProvider } from './CourseContext';
import CourseComponent from './CourseComponent';
import TestComponent from './TestComponent';

class App extends Component{
  render(){
    return(
      <MyStudentProvider>
        <MyCourseProvider>
      <div className="App container">
        <StudentComponent/>
        <StudentComponent1/>
        <CourseComponent/>
      </div>
      <TestComponent/>
    
      </MyCourseProvider>
      </MyStudentProvider>
    )
  }
}

export default App;
