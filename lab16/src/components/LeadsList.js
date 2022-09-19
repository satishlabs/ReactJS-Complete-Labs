import { Component } from "react";
import Lead from "./Lead";

class LeadsList extends Component{
    state = {
        myleadsList:[
            { leadId: 101, name: "Sri", email: "sri@jlc", phone: 12345, course: "Java FSD" }, 
            { leadId: 102, name: "vas", email: "vas@jlc", phone: 55555, course: "Angular" }, 
            { leadId: 103, name: "srinivas", email: "srinivas@jlc", phone: 99999, course: "React" }, 
        ]
    };

    deleteMyLead = (leadId) =>{
        console.log("LeadList - deleteMyLead() ");
        const { myleadsList }= this.state;
        console.log(myleadsList);

        const myLeads = myleadsList.filter(
            mylead => mylead.leadId !==leadId
            );

        this.setState({
            myleadsList:myLeads
        });
    };

    render(){
        return(
            <div>
                {
                    this.state.myleadsList.map(mylead =>(
                        <Lead
                        key={mylead.leadId}
                        lead={mylead}
                        myDeleteClickHandler = {this.deleteMyLead.bind(this,mylead.leadId)}
                        />
                    ))
                };
            </div>
        )
    }
}

export default LeadsList;