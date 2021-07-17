import React,{useState,useEffect} from "react";
import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { API } from './backend';
import Addnewproduct from "./components/Addnewproduct";
import AddCustomer from "./components/AddCustomer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import AddCustomers from "./components/AddCustomers";
import AddNewProduct from "./components/Addnewproduct";
import EmployeeInfo from "./components/EmployeeInfo";
import EmployeeDetails from "./components/EmployeeDetails";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>

      <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/addcustomers">
            <AddCustomers />
        </Route>
        <Route path="/addproducts">
           <Addnewproduct />
        </Route>
        <Route path="/addnewcustomer">
          <AddCustomer />
        </Route>
        <Route path="/viewemployeedetails">
          <EmployeeDetails />
        </Route>
        <Route path="/employeeinfo">
        <EmployeeInfo />
        </Route>
        <Route path="/">
        
           <Home />
        </Route>

      </Switch>
       
       
      </Router>
    </div>
  );
}

export default App;
