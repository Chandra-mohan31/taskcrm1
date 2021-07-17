import React, { useState } from 'react'
import ChipsArray from './ChipsArray'
import "./EmployeeInfo.css"
import Topbar from './Topbar';
import chipsArray,{addToArray, handleDelete} from './storage/chipsarray';
import ChipsAlternative from './ChipsAlternative';
import { getEmployeeData } from '../helper';


function EmployeeInfo() {
  
  const [values, setValues] = useState([])

      const [inp, setInp] = useState("")

  const handleChange = (e) => {
    setInp(e.target.value)
  }

  const addToChips = () => {
    // console.log(inp);
    // console.log(values);
    console.log(chipsArray);

    // setValues([...values, { key: values.length+1 , label: inp}])
    addToArray(inp);
    console.log(chipsArray);



    
    // console.log(values);
    
    setInp("")
  }

    return (
        <div>
            {/* <Topbar /> */}
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Employee Management</span>
                </div>
            </nav>

        <div className="emp_form">
            <form className="emp" onSubmit={() => alert('done')}>
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
               <div class="col-sm-10 inputWid">
                  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email Id</label>
               <div class="col-sm-10 inputWid">
                  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Role</label>
               <div class="col-sm-10 inputWid">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Interest</label>
               <div class="col-sm-10 inputWid">
               <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" value={inp} onChange={handleChange} aria-describedby="button-addon2" />
  <button class="btn btn-primary" type="button" onClick={() => addToChips()} id="button-addon2">Add</button>
</div>
{
  <ChipsAlternative />
}
            </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Join Date</label>
               <div class="col-sm-10 inputWid">
                  <input type="date" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>
           
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Phone No.</label>
               <div class="col-sm-10 inputWid">
                  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Address</label>
               <div class="col-sm-10 inputWid">
                  <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">DOB</label>
               <div class="col-sm-10 inputWid">
                  <input type="date" class="form-control"  aria-label="Username" aria-describedby="basic-addon1" />
              </div>
            </div>

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Blood Group</label>
               <div class="col-sm-10 inputWid">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>--.--</option>
                    <option value="O+">O+</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="O-">O-</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
              </div>
            </div>
            

            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Employment Type</label>
               <div class="col-sm-10">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Full-Time</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Part-Time</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                      <label class="form-check-label" for="inlineRadio1">Contract</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                      <label class="form-check-label" for="inlineRadio2">Internship</label>
                  </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn1">Submit</button>
            
            </form>
          </div>
        
        </div>
    )
}

export default EmployeeInfo