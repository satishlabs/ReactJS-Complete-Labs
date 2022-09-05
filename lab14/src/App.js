
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Hello from './Hello';
import Hai from './Hai';
import MyCourses from './MyCourses';

class App extends Component{

  constructor(props){
    super(props);
    console.log(1, "App - constructor()");

    this.state = {
      compnayName:"JAVA",
      courseFlag:true
    }
  };
  static getDerivedStateFromProps(myprops,mystate){
    console.log(2,"App, getDerivedStateFromProps()");
    return null;
  }
  componentDidMount(){
    console.log(4,"App - componentDidMount");
  }

  showHideCourses = () =>{
    let mycourseFlag = this.state.courseFlag;
    this.setState({
      courseFlag:!mycourseFlag
    });
  }

  render(){
    console.log(3,"App - render()");
    let displayCourse = null;
    if(this.state.courseFlag ===true){
      displayCourse = (
        <MyCourses
          hello="Hello Guys"
          hai="Hai Guys"
        />
      );
    }

    return (
      <div className="container">
       <h1 className="text-center">Welcome to {this.state.compnayName}!!</h1>
      <br/>
      <button className="btn btn-danger" onClick={this.showHideCourses}>Show Hide Courses</button>
      <br/><br/>
      {displayCourse}
      <br/>
      <table className="table bordered">
        <tbody>
          <tr>
            <td><Hello mytrainer="Srinivas"/></td>
            <td><Hai mycolor="Blue"/></td>
          </tr>
        </tbody>
      </table>
      
      
      </div>
    );
  }
}

export default App;
