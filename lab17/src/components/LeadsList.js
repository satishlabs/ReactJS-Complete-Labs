import React, { Component } from "react";
import { MyDataConsumer } from "../appContext";
import Lead from "./Lead";

class LeadsList extends Component { 
    render() { 
        return( 
        <MyDataConsumer> 
        { 
            value => { 
                const { myleadsList} = value; 
                return ( 
                    <div> 
                    {myleadsList.map( 
                         mylead => ( <Lead key={mylead.leadId} lead={mylead} />) 
                    )} 
                    </div> 
                ); 
            } 
        } 
        </MyDataConsumer> 
        ); 
        
        } 
   } 
   export default LeadsList;