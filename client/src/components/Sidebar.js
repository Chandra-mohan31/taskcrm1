import React from 'react';
// Dashboard,
// Login,
// Register,
// UserProfile,
// Tables,
// Addclient,
// customers,
// make an order
import {Link, useHistory} from "react-router-dom";
import TableChartSharpIcon from '@material-ui/icons/TableChartSharp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import { Avatar } from '@material-ui/core';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import logo from '../img/logo.png';
import "./Sidebar.css";
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';
import WorkIcon from '@material-ui/icons/Work';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HeadsetIcon from '@material-ui/icons/Headset';



function Sidebar() {
    const history = useHistory();
    console.log(history.location.pathname)
    return (
        <div className="sidebar">
            <div className="d-flex flex-row align-items-center justify-content-start" style={{marginBottom:"15px"}}>
            <img src={logo} className="img-fluid image p-2" alt="" />
          <h1 className="text-primary p-2">Argon</h1>
            </div>
            {/* className={"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" history.location.pathname == "/" ? "active"  : ""}   */}
            <Link style={{textDecoration:"none",color:"black"}} className={history.location.pathname === "/" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"}  to="/" >
                <DashboardIcon className="mb-2" style={{color:"darkblue"}} />
                <h4 className="sidebar_text p-3">Dashboard</h4>
            </Link>
            <Link className={history.location.pathname === "/addcustomers" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} to="/addcustomers">
                <AddCircleOutlineSharpIcon  className="mb-2" style={{color:"red"}} />
                <h4 className="sidebar_text p-3">Add Customers</h4>
            </Link>
            <Link className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" style={{textDecoration:"none",color:"black"}} to="/">
                <TableChartSharpIcon  className="mb-2" style={{color:"lightbrown"}} />
                <h4 className="sidebar_text p-3">Tables</h4>
            </Link>
            <Link className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" style={{textDecoration:"none",color:"black"}} to="/">
                <ShoppingCartSharpIcon  className="mb-2" style={{color:"green"}} />
                <h4 className="sidebar_text p-3">Orders</h4>
            </Link>

            <Link className={history.location.pathname === "/addproducts" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} to="/addproducts">
                <ShoppingBasketOutlinedIcon  className="mb-2" style={{color:"gray"}} />
                <h4 className="sidebar_text p-3">Add Products</h4>
            </Link>
            <Link className={history.location.pathname === "/addtickets" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} to="/">
                <AddToPhotosOutlinedIcon  className="mb-2" style={{color:"orange"}} />
                <h4 className="sidebar_text p-3">Add Tickets</h4>
            </Link>
            {/* <Link className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" style={{textDecoration:"none",color:"black"}} to="/viewemployeedetails">
                <WorkIcon className="mb-2" style={{color:"blue"}} />
                <h4 className="sidebar_text p-3">View EmployeeDB</h4>
            </Link> */}
            <Link className={history.location.pathname === "/viewemployeedetails" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} to="/viewemployeedetails">
                <AssignmentIndIcon className="mb-2" style={{color:"gray"}} />
                <h4 className="sidebar_text p-3">View Employee</h4>
            </Link>
            <Link className={history.location.pathname === "/findproducts" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} to="/">
                <FindInPageOutlinedIcon  className="mb-2" style={{color:"brown"}} />
                <h4 className="sidebar_text p-3">Find Products</h4>
            </Link>
            <Link className={history.location.pathname === "/login" ? "mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2 activeLink ":"mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2"} style={{textDecoration:"none",color:"black"}} href="/login">
                <VpnKeyOutlinedIcon className="mb-2" style={{color:"violet"}} />
                <h4 className="sidebar_text p-3">Login</h4>
            </Link>

         

    
            
        

          
        </div>
    )
}

export default Sidebar
