import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faArrowRightFromBracket, faFileInvoice, faFileInvoiceDollar, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
// import { faSackDollar} from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
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
            <a href="#" className="astyle"><FontAwesomeIcon icon={faHome} />My Profile</a>
          </li>
          <li>
            <a href="#" className="astyle"><FontAwesomeIcon icon={faMoneyBill} />My funds</a>
          </li>
          <li>
            <a href="#" className="astyle"><FontAwesomeIcon icon={faFileInvoiceDollar}/>Accounts</a>
          </li>
          <li>
            <a href="#" className="astyle"><FontAwesomeIcon icon={faCalendarWeek}/>Events</a>
          </li>
        </ul>
        <div  >
        <button className="logout" onClick={changePage}><FontAwesomeIcon icon={faArrowRightFromBracket} rotation={180}/>Logout</button>
        </div>
      </div>
      <div className="mycontent">

      </div>
      </>
    );
  }
}
export default SidePanel;
