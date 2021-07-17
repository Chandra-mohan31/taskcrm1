import React,{useState,useEffect} from 'react';
import { getEmployeeData } from '../helper';


function EmployeeDetails() {
    const [empDetails,setEmpDetails] = useState();
    useEffect(()=>{
        getEmployeeData()
            .then(data => setEmpDetails(data.EmployeeData))
    },[])
    return (
        <div>
            {
              JSON.stringify(empDetails)  
            }
        </div>
    )
}

export default EmployeeDetails
