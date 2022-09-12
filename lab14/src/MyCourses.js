import { Component } from "react";

class MyCourses extends Component{
    static displayName = "MyCoursesComponent";

    constructor(props){
        super(props);

        console.log(1,"MyCourses - Constructor()");

        this.state= {
            trainerName:"Srinivas Dande",
            trainerEmail:"sri@gmail.com",
            errorFlag:false,
            mycourseList :[
                {cid:101,cname:"Angular",price:15000},
                {cid:102,cname:"ReactJS",price:12000},
                {cid:103,cname:"SpringBoot",price:15000},
                {cid:104,cname:"NodeJS",price:9000},
                {cid:105,cname:"Microserivces",price:25000},
            ]
        };
    }

    static getDerivedStateFromProps(myprops,mystate){
        console.log(2,"MyCourses - getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log(4,"MyCourses - componentDidMount()");
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log("MyCourses - shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(prevPorps,prevState){
        console.log("MyCourses - getSnapshotBeforeUpdate()");
        let mysnapshot = {
            message :"I am a Sanpshot",
            trainerName: prevState.trainerName,
            trainerEmail:prevState.trainerEmail,
        };
        return mysnapshot;
    }

    componentDidUpdate(prevPorps,prevState,mysnapshot){
        console.log("MyCourses - componentDidUpdate()");
        console.log("MyCourses - ",mysnapshot);
        //Post this snapshot to server
    }

    componentWillUnmount(){
        console.log(4,"MyCourses - componentWillUnmount()");
    }

    static getDerivedStateFromError(error){
        console.log("MyCourses - getDerivedStateFromError()");
        return{
         hasError:true
        }
      }
      
      componentDidCatch(error,info){
        console.log("MyCourses - componentDidCatch()",error);
        console.log("MyCourses - componentDidCatch()",info);
        this.state.errorFlag= true;
      }
      
      
      //Deprecated methods
      //componentWillMount(){
        //console.log("MyCourses - componentWillMount()");
      //}
      
      //componentWillReceiveProps(){
        //console.log("MyCourses - componentWillReceiveProps()");
      //}
      
      //componentWillUpdate(){
        //console.log("MyCourses - componentWillUpdate()");
      //}

    render(){
        console.log(3,"MyCourses - render()");
        let couseListToDisplay = this.state.mycourseList.map(
            (mycourse) =>(
                <tr key={mycourse.cid}>
                    <td><h6>{mycourse.cid}</h6></td>
                    <td><h6>{mycourse.cname}</h6></td>
                    <td><h6>{mycourse.price}</h6></td>
                </tr>
            )
        )

        return(
            <div className="container">
                <br/>
                <div className="container">
                    <table className="table">
                        <tbody>
                            {couseListToDisplay}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default MyCourses;