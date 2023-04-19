import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import { EmployeeList } from "./components/employee/employee-list.component";
import { CreateEmployee } from './components/employee/employee-add.component';
import EditEmployee from "./components/employee/employee-edit.component";
import { CustomerList } from './components/customer/customer-list.component'
import { CreateCustomer } from './components/customer/customer-add.component'
import EditCustomer from './components/customer/customer-edit.component'
import { OrderList } from './components/order/order-list.component'
import { CreateOrder } from './components/order/order-add.component'
import EditOrder from './components/order/order-edit.component'
import { InventoryList } from './components/inventory/inventory-list.component'
import { CreateInventory } from './components/inventory/inventory-add.component'
import EditInventory from './components/inventory/inventory-edit.component'
import { ProductList } from './components/product/product-list.component'
import { CreateProduct } from './components/product/product-add.component'
import { InventoryOrderList } from './components/inventoryOrder/inventoryOrders-list.component'
import { CreateInventoryOrder } from './components/inventoryOrder/inventoryOrders-add.component'
import { InventoryListForOrder } from './components/inventory/inventory-list-forOrders.component'
import { DeliveryList } from './components/delivery/delivery-list.component'
import { KitchenOrderList } from './components/kitchen/kitchenOrder-list.component'
import { CompletedDeliveryList } from './components/delivery/completed-delivery-list.component'
import { OngoingDeliveryList } from './components/delivery/ongoing-delivery.component'
import { ReadyDeliveryList } from './components/delivery/ready-delivery.component'
import { ScheduleList } from './components/schedule/schedule-list.component';
import { AllScheduleList } from './components/schedule/allSchedule-list.component';
import { CreateSchedule } from './components/schedule/add-schedule.component';
import { ScheduleRequestList } from './components/schedule/scheduleRequest-list.component';
import { PendingScheduleRequestList } from './components/schedule/pendingScheduleRequest-list.component';
import { ApprovedScheduleRequestList } from './components/schedule/approvedScheduleRequest-list.component';
import { DeclinedScheduleRequestList } from './components/schedule/declinedSchedule.component';
import { CreateSalary } from './components/salary/salary-add.component';
import { SalaryList } from './components/salary/salary-list.component';
import { CreateOT } from './components/overTime/overTime-add.component';
import { OTList } from './components/overTime/overTime-list.component';
import EditOT from './components/overTime/overTime-edit.component';
import { InventoryOrderListKitchen } from './components/inventoryOrder/inventoryOrder-list-kitchen.component';

import { FeedbackList } from './components/feedback/feedback-list.component'
import {CreateFeedback} from './components/feedback/feedback-add.component'
import EditFeedback from './components/feedback/feedback-edit.component'


import { UserRegistration } from './components/user/user-registration.component';
import {UserLogin} from './components/user/user-login.component';

import Home from "./components/navbar/home";

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
      <Navbar />
      {/* <Home/> */}
      <Router>
        {/* <EmployeeList/> */}

        <Routes>

        <Route exact path="/nav" element={Navbar } />
        <Route exact path="/" element={<Home/> } />

          <Route exact path="/employee" element={<EmployeeList />} />{/* Done */}
          <Route exact path="/creatEmployee" element={<CreateEmployee />} />{/* Done */}
          <Route exact path="/editEmployee/:id" element={EditEmployee } />{/* Done */}

          <Route exact path="/customer" element={<CustomerList />} /> {/* Done */}
          <Route exact path="/creatcustomer" element={<CreateCustomer />} /> {/* Done */}
          <Route exact path="/editCustomer/:id" element={EditCustomer} />

          <Route exact path="/order" element={<OrderList />} /> {/* Done */}
          <Route exact path="/creatOrder" element={<CreateOrder />} /> {/* Done */}
          <Route exact path="/editOrder/:id" element={EditOrder } />

          <Route exact path="/inventory" element={<InventoryList />} /> {/* Done */}
          <Route exact path="/creatInventory" element={<CreateInventory />} />
          <Route exact path="/editInventory/:id" element={EditInventory } />

          <Route exact path="/product" element={<ProductList />} /> {/* Done */}
          <Route exact path="/creatProduct" element={<CreateProduct />} />

          <Route exact path="/inventoryorder" element={<InventoryOrderList />} />{/* Done */}
          <Route exact path="/creatInventoryOrder" element={<CreateInventoryOrder />} />  {/* dont edit this */}

          <Route exact path="/delivery" element={<DeliveryList />} /> {/* Done */}
          <Route exact path="/completedDelivery" element={<CompletedDeliveryList />} /> {/* Done */}
          <Route exact path="/ongoingDelivery" element={<OngoingDeliveryList />} /> {/* Done */}
          <Route exact path="/readyDelivery" element={<ReadyDeliveryList />} />{/* Done  and need to check with data*/}

          <Route exact path="/kitchenOrder" element={<KitchenOrderList />} /> {/* Done */}

          <Route exact path="/inventorylistfororder" element={<InventoryListForOrder />} /> {/* Done */}
        

          <Route exact path="/feedback" element={<FeedbackList />} />{/* Done */}
          <Route exact path="/creatFeedback" element={<CreateFeedback />} />{/* Done */}
          <Route exact path="/editFeedback/:id" element={EditFeedback } />{/* Done */}


          <Route exact path="/signUp" element={<UserRegistration />} />
          <Route exact path="/signIn" element={<UserLogin />} />

          <Route exact path="/schedule" element={<ScheduleList />} />
          <Route exact path="/allSchedule" element={<AllScheduleList />} />
          <Route exact path="/creatSchedule" element={<CreateSchedule />} />
          <Route exact path="/scheduleRequestLsit" element={<ScheduleRequestList />} />
          <Route exact path="/pendingScheduleRequestLsit" element={<PendingScheduleRequestList />} />
          <Route exact path="/approvedScheduleRequestLsit" element={<ApprovedScheduleRequestList />} />
          <Route exact path="/decliedScheduleRequestLsit" element={<DeclinedScheduleRequestList />} />

          <Route exact path="/createSalary" element={<CreateSalary />} />
          <Route exact path="/salary" element={<SalaryList />} />
          <Route exact path="/createOT" element={<CreateOT />} />
          <Route exact path="/ot" element={<OTList />} />
          <Route exact path="/editOT/:id" element={EditOT } />

          <Route exact path="/iokitchen" element={<InventoryOrderListKitchen />} />{/* Done */}
          
        </Routes>
      </Router>

    </div>
  );

}

export default App;
