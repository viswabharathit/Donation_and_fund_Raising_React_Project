import React from "react";

import { ArrowLeft,DollarSign,Landmark ,Calendar,CircleUser,IndianRupee} from "lucide-react";

import dimage from "../assets/images/statistics.png";
class SidePanel extends React.Component {
  render() {

    const changePage=()=>{
      window.location.href='/'
    }
    return (
      <>
      <div className="statistics">
          <img src={dimage}/>
      </div>
      <div  id="sidebar">
        <ul className="ulstyle">
          <li>
            <a href="#" className="astyle"><CircleUser />My Profile</a>
          </li>
          <li>
            <a href="#" className="astyle"><IndianRupee/>My funds</a>
          </li>
          <li>
            <a href="#" className="astyle"><DollarSign/>Accounts</a>
          </li>
          <li>
            <a href="#" className="astyle"><Calendar/>Events</a>
          </li>
        </ul>
        <div  >
        <button className="logout" onClick={changePage}><ArrowLeft/>Logout</button>
        </div>
      </div>
      <div className="mycontent">

      </div>
      </>
    );
  }
}
export default SidePanel;
