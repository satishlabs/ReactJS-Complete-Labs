import { Component } from "react";

class Enrollment extends Component{
    state ={
        enrollmentCount:5,
        enrollmentShow:true,
        enrollmentList: [ 
            {leadId:101,sid:501,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
            {leadId:102,sid:502,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
            {leadId:103,sid:503,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
            {leadId:104,sid:504,sname:'Vas',course:'React',feepaid:10000.0,feebal:5000.0}, 
            {leadId:105,sid:505,sname:'Sri',course:'Angular',feepaid:10000.0,feebal:5000.0}, 
            ], 
            
    }
    render(){
        let myenrollmentToDisplay = null;
        if(this.state.enrollmentShow === true){
            myenrollmentToDisplay = this.state.enrollmentList.map(
                (myenrollments) =>(
                    <table className="table table-striped table-light table-bordered">
                        <tbody>
                            <tr>
                                <td><h6>{myenrollments.leadId}</h6></td>
                                <td><h6>{myenrollments.sid}</h6></td>
                                <td><h6>{myenrollments.course}</h6></td>
                                <td><h6>{myenrollments.feepaid}</h6></td>
                                <td><h6>{myenrollments.feebal}</h6></td>
                            </tr>
                        </tbody>
                    </table>
                )
            )
        }
        return(
            <div>
                <h3>Enrollment Count: {this.state.enrollmentCount}</h3>
                {myenrollmentToDisplay}
            </div>
        )
    }
}
export default Enrollment;