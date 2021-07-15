import React from 'react'
import "./StatsCard.css"

import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';


function StatsCard({title,bgcolor,Icon,val}) {
    return (
        <div class="statscard mt-2" >
            
                <div class="card cardview p-2 ">
                <div class="card-body d-flex flex justify-content-between" >
                {/* style={{width:"235px"}} */}
                    <div>
                        <h6 class="card-title text-gray ">{title}</h6>
                        <h4>{val}</h4>
                    </div>
                    <div className="p-1" style={{ background:bgcolor, borderRadius:"50%", height:"50px", width:"50px"}}>
                    <Icon style={{fontSize:"41px", color:"white"}} />
                </div>
                </div>
                <p class="card-text boxx p-1" style={{color:"green"}} > <ArrowUpwardRoundedIcon style={{color:"green", marginTop:"-5px"}} /> 37.15%<span style={{color:"grey"}}>  Since last month</span></p>
                </div>
            
            
        </div>
    )
}

export default StatsCard