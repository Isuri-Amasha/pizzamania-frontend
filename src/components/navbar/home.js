import { Component } from "react";

import AuthenticationService from "../user/AuthenticationService";

class home extends Component {
 
  render(){

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsEditor = false;
    let unknownUser = false;

    if(isUserLoggedIn == true){
      console.log("User Logged In")
    }else{
      unknownUser = true;
    }

    if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
      loggedAsEManager = true;
  }
  if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
    loggedAsCManager = true;
  }
  if (loggedUserRole != null && loggedUserRole === 'editor') {
      loggedAsEditor = true;
  }

  return (
    <div>
      {isUserLoggedIn && 
    
    <h1>Pizza Mania Home Page</h1>
      }
  
    </div>
  );
    }
}

export default home;