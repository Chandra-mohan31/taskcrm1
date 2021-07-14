import React from 'react';
// Dashboard,
// Login,
// Register,
// UserProfile,
// Tables,
// Addclient,
// customers,
// make an order
import TableChartSharpIcon from '@material-ui/icons/TableChartSharp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import { Avatar } from '@material-ui/core';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import logo from '../img/logo.png';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="d-flex flex-row align-items-center justify-content-start ">
            <img src={logo} className="img-fluid image p-2" alt="" />
          <h1 className="text-primary p-2">Argon</h1>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <DashboardIcon className="mb-2" style={{color:"blue"}} />
                <h4 className="sidebar_text p-2">Dashboard</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <AddCircleOutlineSharpIcon  className="mb-2" style={{color:"red"}} />
                <h4 className="sidebar_text p-2">Add Client</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <TableChartSharpIcon  className="mb-2" style={{color:"lightgreen"}} />
                <h4 className="sidebar_text p-2">Tables</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <ShoppingCartSharpIcon  className="mb-2" style={{color:"orange"}} />
                <h4 className="sidebar_text p-2">Orders</h4>
            </div>
         

    
            
        

          
        </div>
    )
}

export default Sidebar
