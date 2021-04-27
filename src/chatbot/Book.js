import React, { Component } from 'react'
import Bookslot from './Bookslot'
import Guesttime from './Guesttime'

export class Book extends Component {
    constructor(props) {
        super(props)
        this.handleupdate = this.handleupdate.bind(this);
    
        this.state = {
             slot:[
                 {
                     id:"1",
                     time_interval:"10 AM - 11 AM",
                     guest_count: 1,
                     status: "low"
                 },
                 {
                    id:"2",
                    time_interval:"12 AM - 1.0 AM",
                    guest_count: 15,
                    status: "low"
                },
                {
                    id:"3",
                    time_interval:"2.0 PM - 3.0 PM",
                    guest_count: 8,
                    status: "low"
                },
                {
                    id:"4",
                    time_interval:"4.0 PM - 5.0 PM",
                    guest_count: 50,
                    status: "medium"
                },
                {
                    id:"5",
                    time_interval:"5.0 PM - 6.0 PM",
                    guest_count: 188,
                    status: "high"
                },

             ]

             
        }
    }
    
   handleupdate = (passedid) =>{
          this.state.slot.map((item,index)=>{
              if(item.id==passedid){
                  this.setState([this.state.slot[index].guest_count=this.state.slot[index].guest_count+1])
                  if(this.state.slot[index].guest_count>0&&this.state.slot[index].guest_count<=15){
                      this.setState([this.state.slot[index].status="low"])
                  }
                  else if (this.state.slot[index].guest_count>15&&this.state.slot[index].guest_count<=50){
                    this.setState([this.state.slot[index].status="medium"])
                  }
                  else{
                    this.setState([this.state.slot[index].status="high"])
                  }
                  
                  
              }

          }

          )
   }

    render() {
        return (
        
           <>
            <div>
                {
                    this.state.slot.map((item,idex)=>{
                        return(
                            
                    <Bookslot handler = {this.handleupdate} id = {item.id}  status={item.status} timeinterval={item.time_interval} guestcount={item.guest_count}/> 
                        )
                    }

                    )
                }
               
            </div>
          
            </>
            
        
        )
    }
}

export default Book
