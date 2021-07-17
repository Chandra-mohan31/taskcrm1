import React,{useState} from 'react'
import "./AddCustomers.css";
import Sidebar from "./Sidebar";
import Topbar from './Topbar';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useHistory } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import "./AddCustomers.css";
import logo from "../img/logo.png";
import { Avatar } from '@material-ui/core';
import { isAuthenticated, signout } from '../helper';
import "./Addcustomer.css";
import SearchIcon from '@material-ui/icons/Search';


const NewForm = () => {
  return(
  <div >
            <div className="form1">
            <div class="mb-3 row">
              
               <div class="d-flex align-items-center">
               <label style={{marginRight:"15px"}}>Customer Type</label>
                  <div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Business</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Individual</label>
                  </div>
                  </div>
              </div>
            </div>

          

          <div class="row mb-3 d-flex align-items-center">
            <div className="col">
              <label>Primary Contact</label>
            </div>
            <div class="col">
            <select class="form-select" aria-label="Default select example">
                    <option selected>Salutation</option>
                    <option value="1">Mr.</option>
                    <option value="2">Ms.</option>
                    <option value="3">Mrs.</option>
                  </select>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
            

            <div class="mb-3 row d-flex align-items-center">
              <label for="staticEmail" class="col-sm-2 col-form-label">Company Name</label>
               <div class="col">
                  <input type="text" class="form-control" placeholder="company name"  aria-label="email" aria-describedby="basic-addon1" />
              </div>
            </div>


            <div class="mb-3 d-flex align-items-center">
              <label for="staticEmail" class="col-sm-2 col-form-label">Customer Display Name</label>
               <div class="col-sm-10">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              </div>
            </div>

            <div class="mb-3 d-flex align-items-center ">
              <label for="staticEmail" class="col-sm-2 col-form-label">Customer Email</label>
               <div class="col-sm-10">
                  <input type="text" class="form-control" placeholder="enter valid email" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 d-flex align-items-center ">
              <label for="phone" class="col-sm-2 col-form-label">Customer Phone</label>
               <div class="col-sm-10">
                  <input type="text" class="form-control" aria-label="phone" placeholder="phone number" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 d-flex align-items-center ">
              <label for="phone" class="col-sm-2 col-form-label">Website</label>
               <div class="col-sm-10">
                  <input type="text" class="form-control" aria-label="phone" placeholder="website url" aria-describedby="basic-addon1" />
              </div>
            </div>


            <div className="mb-3 d-flex align-items-center">
            <button className="btn btn-success text-white">Save</button> 
            <button className="btn btn-danger text-white mx-3">Cancel</button> 
            </div>
          

            
        </div>
  </div>)
}


function AddCustomer() {
    const [showbar,setShowbar] = useState(false);
    const [text,setText] = useState("");
    const toggleSidebar = () => {
        setShowbar(!showbar);
    }
    const history = useHistory();
    const token = isAuthenticated().access_token;
    return (
        <div className="addcustomers d-flex flex-row">
           
            <div className="d-none d-md-block">
                <Sidebar />
            </div>
            <div className="flex-grow-1">
            {
            showbar ? (
                <div className="d-flex d-md-none flex-column p-2"><CloseIcon className="closebar" onClick={toggleSidebar} /><Sidebar /></div>
            ):(
               <div  className="d-block d-md-none">
               <div className="d-flex flex-row align-items-center justify-content-between">
                    <div>
                    <span className="navbar-toggler-icon" onClick={toggleSidebar}><MenuIcon /></span>
            <img src={logo} className="img-fluid image p-2" alt="" />
                    </div>
   
          <div className="d-flex flex-row align-items-center justify-content-end ">
                       <div className="sm_inputcontainer d-flex flex-row align-items-center justify-content-start">
                       <SearchIcon style={{marginLeft:"8px"}} />
                       <input type="text" placeholder="search" className="sminput" value={text}  onChange={e => setText(e.target.value)} />
                       
                       </div>
                       <Avatar src="data:image/jpeg;base64,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"
                        className="avatar" onClick={()=>{
                    signout(()=>{
                        history.push("/login")
                    },token)
                }} />
                       </div>
            </div>
                       
               </div>
                
            )
        }
                <Topbar />
                <div className="main_container">
                   
                {/* <AddCustForm /> */}
                <NewForm />
                </div>
            </div>
        </div>
    )
}

export default AddCustomer
