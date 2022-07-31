
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList from './mycourses/CourseList';

class App extends Component{
  state ={
    mycourseList:[
      {
        cid: 101,
        cname:"ReactJS",
        trainer:"Prasad",
        price:15000,
        isOnline:true
      },
      {
        cid: 102,
        cname:"Angular",
        trainer:"Mahesh",
        price:15000,
        isOnline:false
      },
      {
        cid: 103,
        cname:"SpringBoot",
        trainer:"Dande",
        price:10000,
        isOnline:true
      },
      {
        cid: 104,
        cname:"NodeJs",
        trainer:"Prasad",
        price:16000,
        isOnline:true
      },
      {
        cid: 105,
        cname:"Spring",
        trainer:"Srinivas",
        price:25000,
        isOnline:true
      },
    ]
  }

  render(){
    return(
      <div>
        <p className="text-center">Welcome to Satish Labs</p>

  <ul className="nav justify-content-end">

  <li className="nav-item">
    <a className="nav-link active">Home</a>
  </li>

  <li className="nav-item">
    <a className="nav-link active">About</a>
  </li>

  <li className="nav-item">
    <a className="nav-link active">Courses</a>
  </li>

  <li className="nav-item">
    <a className="nav-link active">Contact</a>
  </li>

</ul>
<br/>

<div className="container-fluid">
      <CourseList mycourses={this.state.mycourseList}/>
</div>
      </div>
    )
  }
}
export default App;
