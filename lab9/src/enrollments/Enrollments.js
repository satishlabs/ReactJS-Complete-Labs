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
                    <tr key={myenrollments.leadId}>
                        <td>{myenrollments.leadId}</td>
                        <td>{myenrollments.sid}</td>
                        <td>{myenrollments.course}</td>
                        <td>{myenrollments.feebal}</td>
                        <td>{myenrollments.feepaid}</td>
                    </tr>
                )
            )
        }
        return(
            <div>
                <h3>Enrollment Count: {this.state.enrollmentCount}</h3>
                <table className="table table-striped table-light table-bordered">
                        <thead>
                            <tr>
                                <th>LeadId</th>
                                <th>SID</th>
                                <th>Course</th>
                                <th>Feepaid</th>
                                <th>Feebal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {myenrollmentToDisplay}      
                        </tbody>
                    </table>
                        
            </div>
        )
    }
}
export default Enrollment;