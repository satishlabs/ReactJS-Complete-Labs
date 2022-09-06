
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

import MyCourses from './MyCourses';
import Hello from './Hello';

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

shouldComponentUpdate(nextProps,nextState){
    console.log("App - shouldComponentUpdate()");
    return true;
}

getSnapshotBeforeUpdate(prevPorps,prevState){
    console.log("App - getSnapshotBeforeUpdate()");
    return null;
}

componentDidUpdate(prevPorps,prevState,mysnapshot){
    console.log("App - componentDidUpdate()");
}

componentWillUnmount(){
    console.log(4,"App - componentWillUnmount()");
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
     <table className="table borderd">
      <tbody>
        <tr>
          <td><Hello mytrainer="Dande"/></td>
        </tr>
      </tbody>
     </table>
      
      
      </div>
    );
  }
}

export default App;
