import React, {Component} from "react";

export default class App extends Component {


// ---- TASK 1 ---

state={
  active: true,
}
// render(){
//   return (
//     <div className="container">
//       <div className="row mt-3">
//         <div className="col-3">
//           <button className="btn btn-info">Armiyaga qabul qilish</button>
//         </div>
//         <div className="col-8 offset-2 p-5">
//           <table className="table table-bordered table-hover table-stripped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Age</th>
//                 <th>Dept_number</th>
//                 <th>City</th>
//                 <th>State</th>
//                 <th>Salary</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>John</td>
//                 <td>Smith</td>
//                 <td>45</td>
//                 <td>100</td>
//                 <td>Chicago</td>
//                 <td>IL</td>
//                 <td>1000</td>
//               </tr>
//             </tbody>
//             <tbody>
//               <tr>
//                 <td>2</td>
//                 <td>Jane</td>
//                 <td>Doe</td>
//                 <td>25</td>
//                 <td>100</td>
//                 <td>Phoenix</td>
//                 <td>AZ</td>
//                 <td>5000</td>
//               </tr>
//             </tbody>
//             <tbody>
//               <tr>
//                 <td>3</td>
//                 <td>Mary</td>
//                 <td>Smith</td>
//                 <td>40</td>
//                 <td>200</td>
//                 <td>Chicago</td>
//                 <td>IL</td>
//                 <td>2500</td>
//               </tr>
//             </tbody>
//             <tbody>
//               <tr>
//                 <td>4</td>
//                 <td>George</td>
//                 <td>Edwards</td>
//                 <td>50</td>
//                 <td>300</td>
//                 <td>Phoenix</td>
//                 <td>AZ</td>
//                 <td>3000</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

ASD

// --- TASK 2 ---


changeActive=()=>{
  this.setState({
    active: !this.state.active
  });
};
render() {
    const {active} = this.state
  return (
    <div className="container">
      {active ? (
        <div>
          <h1>Login</h1>
          <button onClick={this.changeActive}>login</button>
        </div>
      ) : (
        <div>
          <h1>Welcome</h1>
          <button onClick={this.changeActive}>logout</button>
        </div>
      )}
    </div>
  );
  }
}





