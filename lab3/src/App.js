import { Component } from 'react';
import './App.css';
import Student from './student/Student';

class App extends Component {
  state ={
    myheader: "Welcome to SatishLabs",

  }
  render(){
    console.log("I am app")
  return (
    <div className="myheader">
    <p>{this.state.myheader}</p>
    <Student/>
    </div>
  );
}
}
export default App;
