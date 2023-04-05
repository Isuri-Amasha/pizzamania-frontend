import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import { EmployeeList } from "./components/employee-list.component";
import { CreateEmployee } from './components/employee-add.component';
import { EditEmployee } from "./components/employee-edit.component";
import { CustomerList } from './components/customer-list.component'
import { CreateCustomer } from './components/customer-add.component'
import { EditCustomer } from './components/customer-edit.component'
import { OrderList } from './components/order-list.component'
import { CreateOrder } from './components/order-add.component'
import { EditOrder } from './components/order-edit.component'
import { InventoryList } from './components/inventory-list.component'
import { CreateInventory } from './components/inventory-add.component'
import { EditInventory } from './components/inventory-edit.component'
import { ProductList } from './components/product-list.component'
import { CreateProduct } from './components/product-add.component'
import { InventoryOrderList } from './components/inventoryOrders-list.component'
import { CreateInventoryOrder } from './components/inventoryOrders-add.component'
import { InventoryListForOrder } from './components/inventory-list-forOrders.component'
import { DeliveryList } from './components/delivery-list.component'
import { KitchenOrderList } from './components/kitchenOrder-list.component'
import { CompletedDeliveryList } from './components/completed-delivery-list.component'
import { OngoingDeliveryList } from './components/ongoing-delivery.component'
import { ReadyDeliveryList } from './components/ready-delivery.component'

import { InventoryOrderAddd } from './components/inventoryOrder-addd.component'

import { Feedback, FeedbackList } from './components/feedback-list.component'

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
      <Router>
        {/* <EmployeeList/> */}

        <Routes>

          <Route exact path="/employee" element={<EmployeeList />} />{/* Done */}
          <Route exact path="/creatEmployee" element={<CreateEmployee />} />{/* Done */}
          <Route exact path="/editEmployee/:id" element={<EditEmployee />} />{/* Done */}

          <Route exact path="/customer" element={<CustomerList />} /> {/* Done */}
          <Route exact path="/creatcustomer" element={<CreateCustomer />} /> {/* Done */}
          <Route exact path="/editCustomer/:id" element={<EditCustomer />} />

          <Route exact path="/order" element={<OrderList />} /> {/* Done */}
          <Route exact path="/creatOrder" element={<CreateOrder />} /> {/* Done */}
          <Route exact path="/editOrder/:id" element={<EditOrder />} />

          <Route exact path="/inventory" element={<InventoryList />} /> {/* Done */}
          <Route exact path="/creatInventory" element={<CreateInventory />} />
          <Route exact path="/editInventory/:id" element={<EditInventory />} />

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
          <Route exact path="/orderInventory/${id}" element={<InventoryOrderAddd />} key={InventoryList._id} />  {/* need to check*/}

          <Route exact path="/feedback" element={<FeedbackList />} />{/* Done */}
        </Routes>
      </Router>

    </div>
  );

}

export default App;
