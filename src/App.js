import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import EmployeeList from "./components/employee-list.component";

function App() {
  return (
    <Router>
    <div className="App">
    {/* <Route path = "/employee" exact component = {EmployeeList}/> */}
    <EmployeeList/>
    </div>
    </Router>
  );
  
}

export default App;
