import React,{useState} from 'react'
import "./Addnewproduct.css";
import Sidebar from "./Sidebar";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Topbar from './Topbar';

function Addnewproduct() {
    const [showbar,setShowbar] = useState(false);

    const toggleSidebar = () => {
        setShowbar(!showbar);
    }
    return (
        <div className="d-md-flex">
        {
            showbar ? (
                <div className="d-flex d-md-none flex-column p-2"><CloseIcon onClick={toggleSidebar} /><Sidebar /></div>
            ):(
                <div className="d-block d-md-none"><span className="navbar-toggler-icon" onClick={toggleSidebar}><MenuIcon /></span></div>
            )
        }
        
        
        <div className="d-none d-md-block"><Sidebar/></div>
 
          <div className="w-100">
          <div className="flex-grow-1">
            <Topbar />
            </div>
            <div>
            
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">New Item</span>
                </div>
            </nav>
            </div>

          <div className="seg1">
            <div className="form1">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Type</label>
               <div class="col-sm-10">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Goods</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Service</label>
                  </div>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
               <div class="col-sm-10">
                  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Unit</label>
               <div class="col-sm-10">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">HSN Code</label>
               <div class="col-sm-10">
                  <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Tax Preference</label>
               <div class="col-sm-10">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Taxable</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Non-Taxable</label>
                  </div>
              </div>
            </div>

            
        </div>
  </div>

<div className="sales_main">
            <div className="sales">
              <div class="form-check formTop">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Sales Information
                </label>
              </div>

              <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label text-danger">Selling price*</label>
               <div class="col-sm-10">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">INR</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

              </div>
            </div>


             <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label text-danger">Account*</label>
               <div class="col-sm-10">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
               </div>
              </div>

              <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
               <div class="col-sm-10">
                <div class="input-group flex-nowrap">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

              </div>
            </div>

             </div>


             <div className="sales">
              <div class="form-check formTop">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Purchase Information
                </label>
              </div>

              <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label text-danger">Cost price*</label>
               <div class="col-sm-10">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">INR</span>
                    <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

              </div>
            </div>


             <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label text-danger">Account*</label>
               <div class="col-sm-10">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
               </div>
              </div>

              <div class="mb-3 row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Description</label>
               <div class="col-sm-10">
                <div class="input-group flex-nowrap">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

              </div>
            </div>

             </div>
      </div>

      <div className="text-center btnn">
        <button className="btn btn-primary">Submit</button>
      </div>
      </div>
    </div>
    )
}

export default Addnewproduct