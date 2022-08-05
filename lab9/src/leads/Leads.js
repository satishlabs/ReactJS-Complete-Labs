import { Component } from "react";

class Leads extends Component{
    state ={
        leadCount:5,
        leadShow:true,
        leadList: [ 
            {leadId:101,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
            {leadId:102,name:'Vas',email:'vas@jlc',phone:22222,course:'React'}, 
            {leadId:103,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
            {leadId:104,name:'Vas',email:'vas@jlc',phone:22222,course:'React'}, 
            {leadId:105,name:'Sri',email:'sri@jlc',phone:11111,course:'Angular'}, 
            ], 
            
    }
    render(){

        let myleadsToDisplay = null;
        if(this.state.leadShow === true){
            myleadsToDisplay = this.state.leadList.map(
                (mylead)=>(
                    <table className="table table-striped table-light table-bordered">
                        <tbody>
                            <tr>
                                <td><h6>{mylead.leadId}</h6></td>
                                <td><h6>{mylead.name}</h6></td>
                                <td><h6>{mylead.email}</h6></td>
                                <td><h6>{mylead.phone}</h6></td>
                                <td><h6>{mylead.course}</h6></td>
                            </tr>
                        </tbody>
                    </table>
                )
            )
        }
        return(
            <div>
                <h5>Total Leads: {this.state.leadCount}</h5>
                {myleadsToDisplay}
            </div>
        );
    }
}
export default Leads;