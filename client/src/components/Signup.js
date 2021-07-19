import React,{useState} from 'react'

import "./Signup.css"

import {signup} from "../helper/index";
import { Link } from 'react-router-dom';

function Signup() {
    const [values,setValues] = useState({
        // name:"",
        email:"",
        phonenumber:"",
        password:"",
        error:"",
        success: false
    });
    const {phonenumber,email,password,error,success} = values;

    const handleChange = name => event =>{
        setValues({
            ...values,error:false,[name]:event.target.value
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({
            ...values,error:false
        });
        signup({
            phonenumber,
            email,
            password,
            status:"2"

        })
         .then(data => {
             if(data.error){
                 setValues({
                     ...values,error: data.error,success:false
                 })
             }else{
                 console.log(data);
                 setValues({
                     ...values,
                     phonenumber:"",
                     email:"",
                     password:"",
                     error:"",
                     success:true
                 })
             }
         })
         .catch((err)=> console.log("error in signup"))

         
    }
    const [match, setmatch] = useState(false)
    const check = name => event => {
                if( values.password!=="" && event.target.value === values.password)
                    setmatch(true);
                else
                    setmatch(false);  
            }

    const signupresult = () =>{
        success ? console.log("successfully signed up"):(console.log("signup failed"));
    }
    const successMessage = () => {

        return(
        <div className="row"><div className="col-md-6 offset-sm-3 text-left">
             <div className="alert alert-success" style={{display:success ? "" : "none"}}>
            New account successfully created.Please <Link to="/Login">Login here</Link>
        </div>
        </div>
        </div>
       
        )
    }
    const errorMessage = () => {
        return(
            <div className="row"><div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-danger" style={{display:error ? "" : "none"}}>
            {error}
        </div>
            </div></div>
        
        )
    }
    return (
        <div className="main_signup">
           <h1 className="text-center" style={{color:"white", paddingTop:"40px"}}>Create Account</h1>
           
            <div className="signup">
            <form onSubmit={onSubmit} className="form-control form-control-sm mx-auto signUpForm"> 
            <h3 className="text-center mt-5 mb-4 fs-2 fw-bold">Sign-up</h3>
            <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Phonenumber</label>
                    <input class="form-control" placeholder="phonenumber" id="exampleInputEmail1" value={phonenumber} onChange={handleChange("phonenumber")} aria-describedby="emailHelp" required />
                </div>  
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" value={email} onChange={handleChange("email")} aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" placeholder="**" class="form-control" id="exampleInputPassword1" value={password} onChange={handleChange("password")} required />
                </div>
                
                

                 <div class="mb-3 mx-auto w-75">
                    <label for="exampleInputPassword1" class="form-label">Re-enter password</label>
                    <input type="password" placeholder="**" class="form-control" id="exampleInputPassword2" onChange={check("repassword")} required />
                    {
                        match?(
                            <p style={{color:"white"}}>Matched👍</p>
                        ):(
                            <p style={{color:"black"}}>Unmatched👎</p>
                        )
                    }
                </div>
                
                   {
                        match?(
                            <button type="submit" class="btn button" >Submit</button>
                        ):(
                            <button disabled type="submit" class="btn button"  >Submit</button>
                        )
                    }
                    <p>Already an user ? <Link to="/login" style={{color:"white"}} >login here</Link></p>
                    {successMessage()}
                    {errorMessage()}
            </form>
            
            </div>

        </div>
    )
}

export default Signup

// import React,{useState} from 'react'

// import "./Signup.css"

// import {signup} from "../helper/index";
// import { Link } from 'react-router-dom';

// function Signup() {
//     const [values,setValues] = useState({
//         // name:"",
//         email:"",
//         phonenumber:"",
//         password:"",
//         error:"",
//         success: false
//     });
//     const {phonenumber,email,password,error,success} = values;

//     const handleChange = name => event =>{
//         setValues({
//             ...values,error:false,[name]:event.target.value
//         })
//     }

//     const onSubmit = (event) =>{
//         event.preventDefault();
//         setValues({
//             ...values,error:false
//         });
//         signup({
//             phonenumber,
//             email,
//             password,
//             status:"2"

//         })
//          .then(data => {
//              if(data.error){
//                  setValues({
//                      ...values,error: data.error,success:false
//                  })
//              }else{
//                  console.log(data);
//                  setValues({
//                      ...values,
//                      phonenumber:"",
//                      email:"",
//                      password:"",
//                      error:"",
//                      success:true
//                  })
//              }
//          })
//          .catch((err)=> console.log("error in signup"))

         
//     }
//     const [match, setmatch] = useState(false)
//     const check = name => event => {
//                 if( values.password!=="" && event.target.value === values.password)
//                     setmatch(true);
//                 else
//                     setmatch(false);  
//             }

//     const signupresult = () =>{
//         success ? console.log("successfully signed up"):(console.log("signup failed"));
//     }
//     const successMessage = () => {

//         return(
//         <div className="row"><div className="col-md-6 offset-sm-3 text-left">
//              <div className="alert alert-success" style={{display:success ? "" : "none"}}>
//             New account successfully created.Please <Link to="/Login">Login here</Link>
//         </div>
//         </div>
//         </div>
       
//         )
//     }
//     const errorMessage = () => {
//         return(
//             <div className="row"><div className="col-md-6 offset-sm-3 text-left">
//             <div className="alert alert-danger" style={{display:error ? "" : "none"}}>
//             {error}
//         </div>
//             </div></div>
        
//         )
//     }
//     return (
//         <div>
           
           
//             <div className="signup">
//             <form onSubmit={onSubmit} className="form-control form-control-sm w-50 mx-auto"> 
//             <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Sign-up</h3>
//             <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputEmail1" class="form-label">Phonenumber</label>
//                     <input class="form-control" placeholder="phonenumber" id="exampleInputEmail1" value={phonenumber} onChange={handleChange("phonenumber")} aria-describedby="emailHelp" required />
//                 </div>  
//                 <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputEmail1" class="form-label">Email address</label>
//                     <input type="email" class="form-control" placeholder="example@gmail.com" id="exampleInputEmail1" value={email} onChange={handleChange("email")} aria-describedby="emailHelp" required />
//                 </div>
//                 <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputPassword1" class="form-label">Password</label>
//                     <input type="password" placeholder="****" class="form-control" id="exampleInputPassword1" value={password} onChange={handleChange("password")} required />
//                 </div>
                
                

//                  <div class="mb-3 mx-auto w-75">
//                     <label for="exampleInputPassword1" class="form-label">Re-enter password</label>
//                     <input type="password" placeholder="****" class="form-control" id="exampleInputPassword2" onChange={check("repassword")} required />
//                     {
//                         match?(
//                             <p style={{color:"green"}}>Matched</p>
//                         ):(
//                             <p style={{color:"red"}}>Unmatched</p>
//                         )
//                     }
//                 </div>
                
//                    {
//                         match?(
//                             <button type="submit" class="btn button_signup" >Submit</button>
//                         ):(
//                             <button disabled type="submit" class="btn button_signup"  >Submit</button>
//                         )
//                     }
//                     {successMessage()}
//                     {errorMessage()}
//             </form>
            
//             </div>

//         </div>
//     )
// }

// export default Signup
