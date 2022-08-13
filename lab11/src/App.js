
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCourses from './MyCourses';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Welcome to SatishLabs</h1>
        <div className="container-fluid">
          <MyCourses/>
        </div>
        <br/><br/><br/><br/>
      </div>
    )
  }
}

export default App;
