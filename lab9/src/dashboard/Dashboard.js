import { Component } from "react";
import Enrollment from "../enrollments/Enrollments";
//import Leads from './leads/Leads';
import Leads from "../leads/Leads"; 



class Dashboard extends Component{
    render(){
        return(
            <div className="container">
                <div className="alert alert-primary" role="alert">
                    <h3 className="text-center">My Dashboard</h3>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body"> 
                             <h4 className="card-title">Leads Data</h4>
                              <Leads/>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body"> 
                             <h4 className="card-title">Enrollment Data</h4>
                            <Enrollment/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard;