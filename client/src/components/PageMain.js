import React from 'react'
import Pagevisits from './Pagevisits'
import "./PageMain.css"
import SocialTraffic from './SocialTraffic'

function PageMain() {
    return (
        <div className="main d-block d-md-flex flex-row w-100 flex-wrap">
            <div className="flex-grow-1"><Pagevisits /></div>
           <div style={{marginLeft:"10px"}}> <SocialTraffic /></div>
            
        </div>
    )
}

export default PageMain