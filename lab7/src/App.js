
import { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    mycoursesToDisplay:[],
   
    mystudentsData:[
      {
        studentId:1001,
        studentName:"Satish",
        email:"satish@gmail",
        phones:{office: 1111,home: 2222},
        address:{city:"Banagalore",state:"KA"},
        mycourses:[
          {cid:101,cname:"ReactJS",price:15000,trainer:"Srinivas Dande"},
          {cid:102,cname:"Angular",price:20000,trainer:"Srinivas Dande"},
          {cid:103,cname:"SpringBoot",price:10000,trainer:"Srinivas Dande"},
        ]
      },
      {
        studentId:1002,
        studentName:"Manish",
        email:"manish@gmail",
        phones:{office: 1001,home: 2222},
        address:{city:"Ranchi",state:"Jh"},
        mycourses:[
          {cid:101,cname:"ReactJS",price:15000,trainer:"Srinivas Dande"},
         // {cid:102,cname:"Angular",price:20000,trainer:"Srinivas Dande"},
          {cid:103,cname:"SpringBoot",price:10000,trainer:"Srinivas Dande"},
        ]
      },
      {
        studentId:1003,
        studentName:"Rakesh",
        email:"rakesh@gmail",
        phones:{office: 2001,home: 4444},
        address:{city:"Patna",state:"BR"},
        mycourses:[
          //{cid:101,cname:"ReactJS",price:15000,trainer:"Srinivas Dande"},
          {cid:102,cname:"Angular",price:20000,trainer:"Srinivas Dande"},
          {cid:103,cname:"SpringBoot",price:10000,trainer:"Srinivas Dande"},
        ]
      }
    ]
  }

  showCoruseInfo =(mysid) =>{
    console.log("Student Id: "+mysid);

  
  let filterStudent =   this.state.mystudentsData.filter(
      (mystudent) =>mystudent.studentId === mysid
    );

    //let mystu = filterStudent[0];
    //let coursesToDisplay = mystu.mycourses;
    let mycourseList = filterStudent[0].mycourses;
    let tempCourseToDisplay = mycourseList.map(
      (mycourse) =>(
        <tr key={mycourse.cid}>
          <td>{mycourse.cid}</td>
          <td>{mycourse.cname}</td>
          <td>{mycourse.price}</td>
          <td>{mycourse.trainer}</td>
        </tr>
      )
    )
    
  
      let displayCourses = (
        <table>
        <thead>
          <tr>
            <th>CID</th>
            <th>Cname</th>
            <th>Price</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {tempCourseToDisplay}
        </tbody>
      </table>
      );


    this.setState({
      mycoursesToDisplay:displayCourses
    })

  }


  showCoruseData =(mystudent) =>{
    console.log("Student Id: "+mystudent.studentId);

    let mycourseList = mystudent.mycourses;
    let tempCourseToDisplay = mycourseList.map(
      (mycourse) =>(
        <tr key={mycourse.cid}>
          <td>{mycourse.cid}</td>
          <td>{mycourse.cname}</td>
          <td>{mycourse.price}</td>
          <td>{mycourse.trainer}</td>
        </tr>
      )
    )
    
  
      let displayCourses = (
        <table>
        <thead>
          <tr>
            <th>CID</th>
            <th>Cname</th>
            <th>Price</th>
            <th>Trainer</th>
          </tr>
        </thead>
        <tbody>
          {tempCourseToDisplay}
        </tbody>
      </table>
      );
    this.setState({
      mycoursesToDisplay:displayCourses
    })

  }

  render(){
    console.log("I am App component");

    let mystudentsToDisplay = this.state.mystudentsData.map(
      (mystudent) =>(
        <tr key={mystudent.studentId}>
          <td>{mystudent.studentId}</td>
          <td>{mystudent.studentName}</td>
          <td>{mystudent.email}</td>
          <td>{mystudent.phones.office}</td>
          <td>{mystudent.phones.home}</td>
          <td>{mystudent.address.city}</td>
          <td>{mystudent.address.state}</td>
          <td>
            <button onClick={this.showCoruseInfo.bind(this,mystudent.studentId)} className="mybutton">Course Info</button>
          </td>
          <td>
            <button onClick={this.showCoruseData.bind(this,mystudent)} className="mybutton">Course Data</button>
          </td>
        </tr>
      )
    )

    return(
      <div>
      <div className="myheader">
        <p>Welcome to SatishLabs</p>
      </div>

      <div className="mydata">
        <table>
          <thead>
            <tr>
              <th>SID</th>
              <th>Sname</th>
              <th>Email</th>
              <th>Office Phone</th>
              <th>Home phone</th>
              <th>City</th>
              <th>State</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mystudentsToDisplay}
          </tbody>
        </table>
      </div>

      <br/><br/>
      <div className="mydata">
       {this.state.mycoursesToDisplay}
      </div>
      </div>
    )
  }
}

export default App;
