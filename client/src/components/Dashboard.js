import React,{useState} from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import { isAuthenticated, signout } from '../helper';
// import StatsCardContainer from './StatsCardContainer';
import "./Dashboard.css";
import StatsCard from "./StatsCard";
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Dashboard() {
    const history = useHistory();
    const redirectToLogin = () => {
        history.push("/login");
    }
    const {user} = isAuthenticated();
    const [open,setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
        
    }
    if(user){
        return (
            <div className="dashboard p-2 w-100">
                       <div className="d-block d-md-none p-2 menubar" onClick={toggleSidebar}><span className="navbar-toggler-icon"><MenuIcon /></span></div>

            <div className="statscontainer d-block d-md-flex flex-row justify-content-evenly align-items-center flex-wrap">

            <StatsCard />
            <StatsCard />

            <StatsCard />
            <StatsCard />


            

            </div>
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
                
                {/* <button onClick={()=>{
                    signout(()=>{
                        history.push("/login")
                    })
                }}>Signout</button> */}
            </div>
        )
    }else{
        return(
            <div>
                <h1>Redirecting to login...</h1>
                {
                    redirectToLogin()
                }
            </div>
        )
    }
}

export default Dashboard
