import React from 'react';
import { Redirect,useHistory } from 'react-router-dom';
import { isAuthenticated, signout } from '../helper';
// import StatsCardContainer from './StatsCardContainer';
import "./Dashboard.css";
import StatsCard from "./StatsCard";

function Dashboard() {
    const history = useHistory();
    const redirectToLogin = () => {
        history.push("/login");
    }
    const {user} = isAuthenticated();
    if(user){
        return (
            <div className="dashboard p-2 w-100">

            <div className="statscontainer d-block d-md-flex flex-row justify-content-evenly align-items-center flex-wrap">

            <StatsCard />
            <StatsCard />

            <StatsCard />
            <StatsCard />


            

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
