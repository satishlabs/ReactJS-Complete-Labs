
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyApplicationData } from './appContext';
import Header from './components/Header';
import LeadsList from './components/LeadsList';

class App extends Component{
  render(){
    return(
      <MyApplicationData>
      <div className="App container">
      <Header mybrand='Lead Manager'/>
      <LeadsList/>
      </div>
      </MyApplicationData>
    )
  }
}

export default App;
