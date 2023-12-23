import React, { useState } from "react";
import Header from "./component/FirstComponent";


const ArmiyaQabulForm = () => {
const [items, setItems] = useState([
    {
    id: 1,
    fisrt_name: "John",
    last_name: "Smith",
    age: 25,
    dept_number: 100,
    city: "Chicago",
    state: "IL",
    salary: 1000,
    },
    {
    id: 2,
    fisrt_name: "Jane",
    last_name: "Doe",
    age: 45,
    dept_number: 100,
    city: "Phoenix",
    state: "IL",
    salary: 51000,
    },
    {
    id: 3,
    fisrt_name: "Mary",
    last_name: "Smith",
    age: 15,
    dept_number: 200,
    city: "Chicago",
    state: "IL",
    salary: 2500,
    },
    {
    id: 4,
    fisrt_name: "George",
    last_name: "Edwards",
    age: 5,
    dept_number: 300,
    city: "Phoenix",
    state: "IL",
    salary: 3000,
    },
]);

const QabulQilish = () => {
    const newItems = items.filter((item) => item.age >= 18);
    setItems(newItems);
};

return (
    <div className="col-8 offset-2 p-5">
    <button className="btn btn-info" onClick={QabulQilish}>
        Armiyaga qabul
    </button>
    <table className="table table-bordered table-hover table-stripped mt-5">
        <thead>
        <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
            <th>Dept_number</th>
            <th>City</th>
            <th>State</th>
            <th>Salary</th>
        </tr>
        </thead>
        <tbody>
        {items.map((item, index) => (
            <tr key={index}>
            <td>{item.id}</td>
            <td>{item.fisrt_name}</td>
            <td>{item.last_name}</td>
            <td>{item.age}</td>
            <td>{item.dept_number}</td>

            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.salary}</td>
            </tr>
        ))}
        </tbody>
    </table>

    <Header/>
    </div>
);
};

export default ArmiyaQabulForm;

