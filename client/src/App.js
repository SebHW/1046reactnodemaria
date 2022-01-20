import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  // States, basically a variable that can be changed and sent to the database
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    // This sends a body, the thing after the comma which here is an object that contains the properties we want to send, to the address
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      salary: salary
    }).then(() => {
      console.log("success");
    });
  };

  

  const getEmployees = () => {
    console.log("Button clicked")
    Axios.get('http://localhost:3001/get').then((response) => {
      console.log(response);
    });
  };
  //wait for the whole employee to be added then once the post request is complete and the promise has been met. THEN use a callback function to log its success. 

  /** 
  const displayInfo = () => {
    console.log(name + age + country + position + salary)
  }
  */

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input 
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }}
        />
        <label>Age:</label>
        <input 
          type="number"
          onChange={(event) => {
            setAge(event.target.value)
          }}
        />
        <label>Country:</label>
        <input 
          type="text"
          onChange={(event) => {
            setCountry(event.target.value)
          }}
        />
        <label>Position:</label>
        <input 
          type="text"
          onChange={(event) => {
            setPosition(event.target.value)
          }}
        />
        <label>Salary</label>
        <input 
          type="number"
          onChange={(event) => {
            setSalary(event.target.value)
          }}
        />
        <button onClick={addEmployee}>Add employee</button>
      </div>
      <div>
          <button onClick={getEmployees}>Show Employees</button>
      </div>
    </div>
  );
}

export default App;
