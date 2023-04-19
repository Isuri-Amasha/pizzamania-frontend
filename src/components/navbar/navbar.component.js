import { Component } from "react";

import AuthenticationService from "../user/AuthenticationService";

class navbar extends Component {
  logout = () => {
    AuthenticationService.logout();
    window.location = "/"
  }
  render() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    const loggedUserId = AuthenticationService.loggedUserId();

    console.log("User Id is" + loggedUserId);
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsIManager = false;
    let loggedAsWStaff = false;
    let loggedAsHChef = false;
    let loggedAsDManager = false;
    let loggedAsPManager = false;
    let loggedAsFManager = false;
    let unknownUser = false;

    if (isUserLoggedIn == true) {
      console.log("User Logged In")
    } else {
      unknownUser = true;
    }

    if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
      loggedAsEManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
      loggedAsCManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Inventory Manager') {
      loggedAsIManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Waiter Staff') {
      loggedAsWStaff = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Head Chef') {
      loggedAsHChef = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Delivery Manager') {
      loggedAsDManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Product Manager') {
      loggedAsPManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Finance Manager') {
      loggedAsFManager = true;
    }

    return (
      <div>
        <div>
          <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
            {unknownUser &&
              <>
                <div className="mb-2 sm:mb-0">
                  <a href="/" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
                </div>
                <div class="">
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">  <a className="text-white no-underline text-md from-neutral-50" href="/signUp">Sign Up</a></button>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><a className="text-white no-underline text-md" href="/signIn">Sign In</a></button>
                  </div>
                </div>
              </>
            }
            {isUserLoggedIn &&
              <>
                <div className="flex mb-2 sm:mb-0">
                  <a href="/" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
                </div>
                <div className='flex text-lg font-light hover:text-blue-dark'>
                  {/* logout button */}
                  {/* <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    ass="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={this.logout}>  Log Out</button>
                    </div> */}
                  {loggedAsEManager &&
                    <>
                      <div class="">
                        <a href="/employee" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Employees</a>
                        <a href="/schedule" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">My Schedule</a>
                        <a href="/allSchedule" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Schedules</a>
                        <a href="/creatSchedule" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Add Schedule</a>
                        <a href="/scheduleRequestLsit" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Schedule Requests</a>
                      </div>
                    </>
                  }

                  {loggedAsCManager &&
                    <div class="">
                      <a href="/customer" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Customer</a>
                    </div>
                  }

                  {loggedAsIManager &&
                    <>
                      <div class="">
                        <a href="/inventory" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Inventory</a>
                      </div>
                    </>
                  }

                  {loggedAsWStaff &&
                    <>
                      <div class="">
                        <a href="/order" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Orders</a>
                        <a href="/feedback" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Feedback</a>
                      </div>
                    </>
                  }

                  {loggedAsHChef &&
                    <>
                      <div class="">
                        <a href="/kitchenOrder" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Kitchen Orders</a>
                        <a href="/inventorylistfororder" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Order Inventory</a>
                      </div>
                    </>
                  }

                  {(loggedAsIManager || loggedAsHChef) &&
                    <div class="">
                      <a href="/inventoryorder" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Inventory Order</a>
                    </div>
                  }

                  {loggedAsPManager &&
                    <div class="">
                      <a href="/product" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Product</a>
                    </div>
                  }

                  {loggedAsDManager &&
                    <>
                      <div class="">
                        <a href="/delivery" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">All Deliveries</a>
                        <a href="/readyDelivery" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Ready Delivery</a>
                        <a href="/completedDelivery" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Completed Delivery</a>
                        <a href="/ongoingDelivery" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Ongoing Delivery</a>
                      </div>
                    </>
                  }

                  {loggedAsFManager &&
                    <>
                      <div class="">
                        <a href="/salary" className="m-2 text-xl font-bold text-black no-underline duration-500 hover:text-2xl">Salary</a>
                      </div>
                    </>
                  }

                </div>
                <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                  <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={this.logout}> Logout</button>
                </div>
              </>
            }
          </nav>
        </div>
      </div>
    );
  }
}

export default navbar;