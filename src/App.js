import React, { Component } from "react";
import FirstComponent from "./component/FirstComponent";


export default class App extends Component{
  state={
    users:[
      {name: "Vektor", salary: "fitfillion"},
      {name: "Javohir", salary: "Trillion"},
      {name: "Gryuu", salary: "Minioni"},
    ],
    count: 0,
  }
  increase =()=>{
    this.setState({
      count: count + 1
    })
  }
  decrease =()=>{
    this.setState({
      count: count - 1
    })
  }
  render(){
    const {users,count} = this.state
    return(
      <div>
        <FirstComponent users={users} count={count} increase={this.increase} decrease={this.decrease} />
      </div>
    )
  }
}