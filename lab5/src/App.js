import { Component } from 'react';
import './App.css';
import Student from './student/Student';

class App extends Component {
  state = {
    myheader: "Welcome to SatishLabs",
    Student:{
    sid: 101,
    sname: "Mahish",
    email: "manish@gmail",
    phone: 123445,
    city: "Bangalore",
    Course:{
        cid:"c-1002",
        courseName:"ReactJS",
        price:15000,
        trainer:"Satish"
    }
  }
}

  render(){
    console.log("I am app")
  return (
    <div className="myheader">
    <p>{this.state.myheader}</p>
    <Student mystudents ={this.state.Student}/>
    </div>
  );
}
}
export default App;
