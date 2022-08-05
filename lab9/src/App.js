
import './App.css';
import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './dashboard/Dashboard';

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <h1 className="text-center">Welcome to SatishLabs</h1>
        <Dashboard/>
      </div>
    )
  }
}

export default App;
