import React from 'react';
import "./Pagevisits.css"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Pagevisits() {
    return (
        <div className="page_main" style={{backgroundColor:"white"}}>
          <div className="page_nav">
            <h3 className="page">Page</h3>
            <button type="button" className="bttn">See all</button>
          </div>
            <table className="table">
  <thead className="row_nav">
    <tr>
      <th className="row_head" scope="col">PAGE NAME</th>
      <th className="row_head" scope="col">VISITORS</th>
      <th className="row_head" scope="col">UNIQUE USERS</th>
      <th className="row_head" scope="col">BOUNCE RATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="row1">/argon/</th>
      <td>4,569</td>
      <td>340</td>
      <td><ArrowUpwardIcon style={{color:"green"}} /> 46,53%</td>
    </tr>
    <tr>
      <th className="row1" scope="row">/argon/index.html</th>
      <td>3,985</td>
      <td>319</td>
      <td><ArrowDownwardIcon style={{color:"red"}}/> 46,53%</td>
    </tr>
    <tr>
      <th className="row1" scope="row">/argon/charts.html</th>
      <td>3,513</td>
      <td>294</td>
      <td><ArrowDownwardIcon style={{color:"red"}}/> 36,49%</td>
    </tr>
    <tr>
      <th className="row1" scope="row">/argon/tables.html</th>
      <td>2,050</td>
      <td>147</td>
      <td><ArrowUpwardIcon style={{color:"green"}}/> 50,87%</td>
    </tr>
    <tr>
      <th className="row1" scope="row">/argon/profile.html</th>
      <td>1,795</td>
      <td>190</td>
      <td><ArrowDownwardIcon style={{color:"red"}}/> 46,53%</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Pagevisits

