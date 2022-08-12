
import { Component } from 'react';
import './App.css';
class App extends Component{
  state ={
    trainer :"Satish Prasad",
    course:"ReactJS",
    styleFlag:false,
    classFlag:false
  }

  changeStyles = () =>{
    console.log("Button Clicked");
    let myFlag = this.state.styleFlag;
    this.setState({
      styleFlag: !myFlag
    });
  }

  changeClaases = () =>{
    console.log("Button Clicked");
    let myFlag = this.state.classFlag;
    this.setState({
      classFlag:!myFlag
    });
  }
  render(){
    let mystyles={
      color:'blue',
      fontSize:'25px',
      border:'2px solid red',
      borderRadius:'5px',
      padding:'10px',
      fontFamily:'Cambria'
    }

    if(this.state.styleFlag===true){
      mystyles ={
        color:'blue',
        fontSize:'25px',
        border:'5px solid red',
        borderRadius:'15px',
        padding:'10px',
        backgroundColor:'LightYellow'
      };
    }else{
      mystyles ={
        color:'red',
        fontSize:'25px',
        border:'2px solid blue',
        borderRadius:'5px',
        padding:'10px',
        backgroundColor:'LightGreen'
      };
    }

    //Define Array of CSS Classes
    let myclassList =["myclass1","myclass2"];
    //myclassList.push("myred");
    console.log(myclassList);
   // console.log(myclassList.join);

    if(this.state.classFlag === false){
      myclassList.slice(2,1);
      myclassList.push("myred");
    }else{
      myclassList.slice(2,1);
      myclassList.push("myblue");
    }

    return (
      <div className="container">
         <h1 className="text-center">Welcome to SatishLabs</h1>
         <br/>
         <p>1. Applying Styles  - Static Way</p>
        <div style={{color:'red',fontSize:'25px',border:'2px solid blue',borderRadius:'5px',padding:'10px',fontFamily:'Cambria'}}>
          You are learning {this.state.course} from {this.state.trainer}
        </div>

        <br/>
         <p>2. Applying Styles  - Dynamic Way</p>
        <div style={mystyles}>
        You are learning {this.state.course} from {this.state.trainer}
        </div>
        <br/>
        <button onClick={this.changeStyles} className="btn btn-success">Change Styles</button>

        <br/>
         <p>3. Applying Classes  - Static Way</p>
        <div className="myclass1 myclass2 myblue">
          You are learning {this.state.course} from {this.state.trainer}
        </div>

        <br/>
         <p>4. Applying Classes  - Dynamic Way</p>
        <div className={myclassList.join(" ")}>
          You are learning {this.state.course} from {this.state.trainer}!!!
        </div>
        <br/>
        <button onClick={this.changeClaases} className="btn btn-success">Change Classes</button>
        <br/>
      </div>
    );
  }
}

export default App;
