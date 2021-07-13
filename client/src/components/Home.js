import React,{useState} from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import "./Home.css";
function Home() {
    const [open,setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
        
    }
    
    return (
        <div className="home d-flex">
            <div className="bg-white d-none d-md-block" ><Sidebar /></div>
            {/* <button onClick={toggleSidebar} className="navbar-toggler"><span className="navbar-toggler-icon d-block d-md-none"><MenuIcon /></span></button> */}
            <div className="d-block d-md-none" onClick={toggleSidebar}><span className="navbar-toggler-icon"><MenuIcon /></span></div>
            <div className=" flex-grow-1 bg-primary"><Dashboard /></div>
                <div className="modal_sidebar">
                {/* <Modal
            
            open={open}
            onClose={toggleSidebar}
            aria-labelledby="Sidebar"
            
          >
            {
                <h1>hey</h1>
            }
          </Modal> */}
               
                </div>
                
        </div>
    )
}

export default Home
