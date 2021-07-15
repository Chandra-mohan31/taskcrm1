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
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import logo from '../img/logo.png';
import "./Sidebar.css";
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';
import AddToPhotosOutlinedIcon from '@material-ui/icons/AddToPhotosOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="d-flex flex-row align-items-center justify-content-start" style={{marginBottom:"15px"}}>
            <img src={logo} className="img-fluid image p-2" alt="" />
          <h1 className="text-primary p-2">Argon</h1>
            </div>
            <a className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" style={{textDecoration:"none",color:"black"}} href="/">
                <DashboardIcon className="mb-2" style={{color:"darkblue"}} />
                <h4 className="sidebar_text p-3">Dashboard</h4>
            </a>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <AddCircleOutlineSharpIcon  className="mb-2" style={{color:"red"}} />
                <h4 className="sidebar_text p-3">Add Customers</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <TableChartSharpIcon  className="mb-2" style={{color:"lightbrown"}} />
                <h4 className="sidebar_text p-3">Tables</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <ShoppingCartSharpIcon  className="mb-2" style={{color:"green"}} />
                <h4 className="sidebar_text p-3">Orders</h4>
            </div>

            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <ShoppingBasketOutlinedIcon  className="mb-2" style={{color:"gray"}} />
                <h4 className="sidebar_text p-3">Add Products</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <AddToPhotosOutlinedIcon  className="mb-2" style={{color:"orange"}} />
                <h4 className="sidebar_text p-3">Add Tickets</h4>
            </div>
            <div className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2">
                <FindInPageOutlinedIcon  className="mb-2" style={{color:"brown"}} />
                <h4 className="sidebar_text p-3">Find Products</h4>
            </div>
            <a className="mx-2 sidebar-item d-flex flex-row align-items-center justify-content-start p-2" style={{textDecoration:"none",color:"black"}} href="/login">
                <VpnKeyOutlinedIcon className="mb-2" style={{color:"violet"}} />
                <h4 className="sidebar_text p-3">Login</h4>
            </a>

         

    
            
        

          
        </div>
    )
}

export default Sidebar
