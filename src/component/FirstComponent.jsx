import React, { Component } from "react";


export default class FirstComponent extends Component{

    increase=()=>{
        let {count} = this.props
        console.log(count)
        count++
    }

render(){
    const {users, count} = this.props
    return <div className="container">
        <h1>Count: {count}</h1>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        {/* <table className="table table-bordered table-striped my-5">
            <thead>
                <tr>
                <th>T/r</th>
                <th>Name</th>
                <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item,index)=>{
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.salary}</td>
                    </tr>
                    })
                }
            </tbody>
        </table> */}
    </div>
    
    }
}