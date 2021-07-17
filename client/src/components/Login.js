
import React,{useState} from 'react'
import "./Login.css"
import logo from '../img/logo.png';
import { signin,authenticate,isAuthenticated} from "../helper";
import { Redirect ,Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';


function Login() {
    const [values,setValues] = useState({
        phonenumber:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
        
    });

    const {phonenumber,password,error,loading,didRedirect} = values;

    // const {user} = isAuthenticated();

    const authdata = isAuthenticated();
    

    

    let user = authdata.email;
    console.log(user);

    const handleChange = name => event =>{
        setValues({
            ...values,error:false,[name]:event.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setValues({
            ...values,error:false,loading: true
        });
        console.log(values);

        signin({
            phonenumber,
            password
        })
       
        // .then(res => console.log(res))
        .then(data => {
            if(data.error){
                setValues({
                    ...values,error: data.error,loading:false
                })
            }else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect: true
                    })

                })
               
            }
        })
        .catch((err)=> console.log("error in signin"))
        console.log(user);
        
    }

    const performRedirect = () => {
        if(isAuthenticated && didRedirect){
            return <Redirect to="/" />
        }
    }

    if(!user){
        return (
            <div className="login">
    <nav class="navbar navbar-expand-lg navbar-light navBar">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">
      <img src={logo} alt="image" width="40" height="40" class="d-inline-block logo1" />
      <span className="argon">argon</span>
    </a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon d-none"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ulItem">
        <li className="nav-item">
          <a className="nav-link navItem" aria-current="page" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navItem" href="#">Register</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item navIcon">
            <FacebookIcon />
        </li>
        <li class="nav-item navIcon">
            <InstagramIcon />
        </li>
        <li class="nav-item navIcon">
            <TwitterIcon />
        </li>
        <li class="nav-item navIcon">
            <GitHubIcon />
        </li>
      </ul>
    </div>
  </div>
</nav>
               

            <div className="welcome">
                <h3 className="text-center head1">Welcome!</h3>
                <p className="text-center head2">Login in your account</p>
            </div>

                <div className="signup cardGlass w-sm-100">
                <form className="form-control form-control-sm mx-auto signupForm"> 
                <h3 className="text-center mt-3 mb-4 fs-2 fw-bold">Login</h3>
                    <div class="mb-3 mx-auto w-75">

                        <label for="exampleInputEmail1" class="form-label">PhoneNo</label>
                        <input type="text" class="form-control" placeholder="91 xxxxxxxxxx" id="exampleInputEmail1" value={phonenumber} onChange={handleChange("phonenumber")} aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 mx-auto w-75">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" placeholder="&#128274; password" class="form-control" value={password} onChange={handleChange("password")} id="exampleInputPassword1" />
                    </div>
                    
                    
                    <button type="submit" onClick={onSubmit} class="btn button">Submit</button>
                    <div className="text-center" style={{display:"flex",margin:"20px"}}>
                    {/* <p style={{marginRight:"5px"}}>If not signed up</p><Link to="/signup">Signup</Link> */}
                    </div>
                    {
                        performRedirect()
                    }
                </form>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                    <a className="text-white p-3" href="#" style={{textDecoration:"none"}}>Forget password?</a>
                    <a className="text-white p-3" style={{textDecoration:"none"}} href="/signup">Create Account</a>

                    </div>

                </div> 
                <div className="footer d-none text-white-50 d-sm-flex flex-row align-items-center justify-content-between mx-5 mt-5">
                    <div>2021 @jordan</div>
                    <div className="footer_right d-flex flex-row align-items-center justify-content-evenly" >
                        <a href="#" className="text-white-50" style={{textDecoration:"none",marginLeft:"10px"}}>Jordan</a>
                        <a href="#" className="text-white-50"  style={{textDecoration:"none",marginLeft:"10px"}}>About Us</a>
                        <a href="#" className="text-white-50"  style={{textDecoration:"none",marginLeft:"10px"}}>Blog</a>
                        <a href="#" className="text-white-50"  style={{textDecoration:"none",marginLeft:"10px"}}>License</a>
                    </div>
                </div>
            </div>

            

            
        )
    }else{
        return <Redirect to="/" />
    }
}

export default Login