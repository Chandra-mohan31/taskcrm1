import React from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "./SocialTraffic.css"

function SocialTraffic() {
    return (
        <div className="main_st">
          <div className="st_nav">
            <h3 className="social">Social Traffic</h3>
            <button type="button" className="bttn_st">See all</button>
          </div>
            <table className="table">
  <thead className="row_nav">
    <tr>
      <th className="row_head" scope="col">REFERRAL</th>
      <th className="row_head" scope="col">VISITORS</th>
      <th className="row_head" scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="row1">Facebook</th>
      <td>1,480</td>
      <td className="prog"><div className="progress" style={{ height: "5px", marginTop: "10px"}} >
  <div className="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
    </tr>
    <tr>
      <th className="row1" scope="row">Facebook</th>
      <td>5,480</td>
      <td><div className="progress" style={{ height: "5px", marginTop: "10px"}} >
  <div className="progress-bar bg-success" role="progressbar" style={{width: "70%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
    </tr>
    <tr>
      <th className="row1" scope="row">Google</th>
      <td>4,807</td>
      <td><div className="progress" style={{ height: "5px", marginTop: "10px"}} >
  <div className="progress-bar bg-primary" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
    </tr>
    <tr>
      <th className="row1" scope="row">Instagram</th>
      <td>3,678</td>
      <td><div className="progress" style={{ height: "5px", marginTop: "10px"}} >
  <div className="progress-bar bg-info" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
    </tr>
    <tr>
      <th className="row1" scope="row">Twitter</th>
      <td>2,645</td>
      <td><div className="progress" style={{ height: "5px", marginTop: "10px"}} >
  <div className="progress-bar bg-warning" role="progressbar" style={{width: "35%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div></td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default SocialTraffic