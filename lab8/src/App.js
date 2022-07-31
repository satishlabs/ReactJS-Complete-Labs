
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render(){
    return(
      <div>
        <p className="text-center">Welcome to Satish Labs</p>

  <ul className="nav justify-content-end">

  <li className="nav-item">
    <a className="nav-link active" href="#">Home</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">Courses</a>
  </li>

  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>

</ul>
      </div>
    )
  }
}
export default App;
