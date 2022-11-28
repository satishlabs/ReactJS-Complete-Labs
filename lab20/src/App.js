
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MyCourseProvider } from './CourseContext';
import CourseComponent from './CourseComponent';

class App extends Component{
  render(){
    return(

        <MyCourseProvider>
      <div className="App container">
        <CourseComponent/>
      </div>
    
      </MyCourseProvider>
    )
  }
}

export default App;
