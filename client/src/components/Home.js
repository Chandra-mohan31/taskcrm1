import React,{useState} from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

// import Modal from '@material-ui/core/Modal';
import "./Home.css";
function Home() {

    
    return (
        <div className="home d-flex">
            <div className="bg-white d-none d-md-block" ><Sidebar /></div>
            
            
            <div className="flex-grow-1 h-100 d-flex flex-row"><Dashboard /></div>
            <div className="modal_sidebar">

            </div>
                
        </div>
    )
}

export default Home
