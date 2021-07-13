import React from 'react'
import "./StatsCard.css"
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';

function StatsCard() {
    return (
        <div class="statscard mt-2">
            
                <div class="card p-2 ">
                <div class="card-body d-flex flex justify-content-between">
                    <div>
                        <h6 class="card-title">TRAFFIC</h6>
                        <h4>350,897</h4>
                    </div>
                    <div className="p-1" style={{ background:"red", borderRadius:"50%", height:"50px", width:"50px"}}>
                    <PollOutlinedIcon style={{fontSize:"41px", color:"white"}} />
                </div>
                </div>
                <p class="card-text boxx" style={{color:"green"}} > <ArrowUpwardRoundedIcon style={{color:"green", marginTop:"-5px"}} /> 37.15%<span style={{color:"grey"}}>  Since last month</span></p>
                </div>
            
            
        </div>
    )
}

export default StatsCard