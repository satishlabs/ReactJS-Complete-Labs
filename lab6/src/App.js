
import { Component } from 'react';
import './App.css';

class App extends Component{
  state ={
    sid:110,
    sname:"Satish",
    email:"satish@gmail.com",
    dob: Date(),
    isActive:true,
    mycourse:{
      couseId:"C-501",
      courseName:"ReactJS",
      price:25000,
      trainer:"Srinivas Dande",
      isOnline:true
    },
    mcourseNames:["Angular","ReactJS","Spring","Hibernate","Java","MySQL"],
    mycoursesList:[
      {courseId:"C-100",courseName:"MongoDB",price:"15000",trainer:"Srinivas Dande"},
      {courseId:"C-101",courseName:"MySQL",price:"21000",trainer:"Satish Prasad"},
      {courseId:"C-102",courseName:"NodeJS",price:"16000",trainer:"Bharath"},
      {courseId:"C-103",courseName:"SpringBoot",price:"15000",trainer:"Dande"},
      {courseId:"C-104",courseName:"ExpressJS",price:"10000",trainer:"Srinivas Dande"},
    ]
  };

  showMoreInfo = (mycid) =>{
    console.log("Course Id ",mycid);
  }

  render(){
    console.log("I am app component");
    // let mycourseNameDisplay = this.state.mcourseNames.map(
    //   (courseName,myindex) => 
    //     (<li key={myindex}>{myindex+1} - {courseName}</li>)
    // );

    let mycourseNameDisplay = this.state.mcourseNames.map(
      (mycourse,myindex) =>(
        <li key={myindex}>{mycourse}</li>
      )
    )

    let mycourseListDisplay = this.state.mycoursesList.map(
      (mycourse)=>(
        <tr key={mycourse.courseId}>
          <td>{mycourse.courseId}</td>
          <td>{mycourse.courseName}</td>
          <td>{mycourse.price}</td>
          <td>{mycourse.trainer}</td>
          <td onClick={this.showMoreInfo.bind(this,mycourse.courseId)} className="mybutton">
                  <button>More Info</button>
          </td>
        </tr>
      )
    )

    return(
      <div>
        <div  className="myheader">
        <p>Welcome to SatishLabs</p><br/>
        </div>
      

        <div className="mydata">
          <h3><u>1. Simple Types:</u></h3>
          <p>Sid: {this.state.sid}</p>
          <p>Sname: {this.state.sname}</p>
          <p>Email: {this.state.email}</p>
          <p>Dob: {this.state.dob}</p>
          <p>Active: {this.state.isActive ? "Yes" : "No"}</p>
        </div>

        <div className="mydata">
        <h3><u>2. Object Types:</u></h3>
          <p>CourseId: {this.state.mycourse.couseId}</p>
          <p>CourseName: {this.state.mycourse.courseName}</p>
          <p>Price: {this.state.mycourse.price}</p>
          <p>Trainer: {this.state.mycourse.trainer}</p>
          <p>Online: {this.state.mycourse.isOnline ? "Yes":"No"}</p>
        </div>

        <div className="mydata">
        <h3><u>3. Simple Array Types:</u></h3>
          <ul>
          {mycourseNameDisplay}
          </ul>
        </div>

        <div className="mydata">
        <h3><u>4. Array of Object types:</u></h3>
          <table>
            <thead>
              <tr>
                <th>Course Id</th>
                <th>Course Name</th>
                <th>Price</th>
                <th>Trainer</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {mycourseListDisplay}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
