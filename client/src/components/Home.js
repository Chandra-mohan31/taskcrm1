import React,{useState} from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import Modal from '@material-ui/core/Modal';
import "./Home.css";
function Home() {
    const [open,setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
        
    }
    
    return (
        <div className="home d-flex">
            <div className="bg-white d-none d-md-block" ><Sidebar /></div>
            
            
            <div className="flex-grow-1 h-100 d-flex flex-row"><div className="d-block d-md-none p-2" onClick={toggleSidebar}><span className="navbar-toggler-icon"><MenuIcon /></span></div><Dashboard /></div>
            <div className="modal_sidebar">

            <Modal className="modal d-md-none modalsidebar" show={open} backdrop="static" aria-labelledby="contained-modal-title-vcenter"  centered onHide={toggleSidebar}>
                <Modal.Header variant="primary" closeButton>
                <Modal.Title> Sidebar  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Sidebar />
                </Modal.Body>
                <Modal.Footer>
                
                </Modal.Footer>

                
            </Modal>
            </div>
                
        </div>
    )
}

export default Home
