import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Navbar from "./components/navbar.component";
import {EmployeeList} from "./components/employee-list.component";
import {CreateEmployee} from './components/employee-add.component';
import {EditEmployee} from "./components/employee-edit.component";
import {CustomerList} from './components/customer-list.component'
import {CreateCustomer} from './components/customer-add.component'
import {EditCustomer} from './components/customer-edit.component'
import {OrderList} from './components/order-list.component'

function App() {
  return (
    // <div className="App">
    // <Router>
    
    
    
    // <EmployeeList/>
    // <div>
    // <Routes>
    
    // <Route path = "/" exact component = {EmployeeList}/>
    // <Route exact path = "/creatEmployee" component = {<CreateEmployee/>}/>
    // <Route exact path = "/editEmployee/:id" component = {EditEmployee}/>
    // </Routes>
    // </div>
    
   
    // </Router>
    // </div>
    <div>
      <Navbar/>
<Router>
{/* <EmployeeList/> */}

    <Routes>
    
    <Route exact path = "/employee" element = {<EmployeeList/>}/>
    <Route exact path = "/creatEmployee" element = {<CreateEmployee/>}/>
    <Route exact path = "/editEmployee/:id" element = {<EditEmployee/>}/>

    <Route exact path = "/customer" element = {<CustomerList/>}/>
    <Route exact path = "/creatcustomer" element = {<CreateCustomer/>}/>
    <Route exact path = "/editCustomer/:id" element = {<EditCustomer/>}/>

    <Route exact path = "/order" element = {<OrderList/>}/>
    </Routes>
    </Router>

    </div>
  );
  
}

export default App;
