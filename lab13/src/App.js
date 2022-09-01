
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    console.log("App - constructor()");

    this.state = {
      compnayName:"JAVA"
    }
  }

  render(){
    console.log(1,"App - render()");
    console.log(2,"App - ",App.displayName); //static variable
    console.log(3,"App - ",App.defaultProps); //static variable
    console.log(4,"App - ",this.state); //instance variable
    console.log(5,"App - ",this.props); //instance variable
    return (
      <div className="container">
       <h1 className="text-center">Welcome to SatishLabs!!</h1>
       <br/>
       
      </div>
    );
  }
}

export default App;
