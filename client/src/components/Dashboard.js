import React from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import { isAuthenticated, signout } from '../helper';



function Dashboard() {
    const history = useHistory();
    const redirectToLogin = () => {
        history.push("/login");
    }
    const {user} = isAuthenticated();
    if(user){
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={()=>{
                    signout(()=>{
                        history.push("/login")
                    })
                }}>Signout</button>
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
