import { Component } from "react";
import Course from './Course';
import 'bootstrap/dist/css/bootstrap.min.css';


class CourseList extends Component{
    state = {
        mycourseList :[],
        courseCount:0
    }

    showAllCourses = () =>{
        console.log("All - clicked");

        this.setState({
            mycourseList: this.props.mycourses,
            courseCount: this.props.mycourses.length
        });
    }

    showLowPriceCourses = () =>{
        console.log("LowPrice - clicked");

        let coursesToDisplay = this.props.mycourses.filter(mycourse => mycourse.price <= 15000)
        console.log(coursesToDisplay);

        this.setState({
            mycourseList: coursesToDisplay,
            courseCount : coursesToDisplay.length
        })

    }

    showOnlineCourses=()=>{
        console.log("Online - clicked");
        let coursesToDisplay = this.props.mycourses.filter(mycourse => mycourse.isOnline === true);
        console.log(coursesToDisplay);

        this.setState({
            mycourseList: coursesToDisplay,
            courseCount: coursesToDisplay.length
        })

    }
    componentDidMount(){ 
        this.showAllCourses(); 
        } 
        
    render(){

        let courseListData = this.state.mycourseList.map(mycourse =>{
            return <Course key={mycourse.cid}
            course={mycourse} />
        })

        return(
            <div className="container-fluid">
                <div className="container-fluid">
                    <button onClick={this.showAllCourses} className="btn btn-info mybutton btn-lg">All Courses</button>
                    <button onClick={this.showLowPriceCourses} className="btn btn-success mybutton btn-lg">Low Price Course</button>
                    <button onClick={this.showOnlineCourses} className="btn btn-danger mybutton btn-lg">Online Coures</button>
                </div>
                <br/>
                <h3>Results: {this.state.courseCount}</h3>
                <br/>
                {courseListData}
            </div>
        )
    }
}
export default CourseList;